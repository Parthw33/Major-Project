import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import uniq from 'uniqid';
import dotenv from 'dotenv';

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');
        const {name, type} = file;
        const data = await file.arrayBuffer();
        console.log(file);

        const id = uniq();
        const ext = name.split('.').slice(-1)[0];
        const newName = id + '.mp4'; 

        try{
            const s3client = new S3Client({
                region: 'eu-north-1',
                credentials: {
                    accessKeyId: process.env.AWS_ACCESS_KEY,
                    secretAccessKey: process.env.AWS_SECRET_KEY,
                },
            });
    
            const uploadcommand = new PutObjectCommand({
                Bucket:process.env.BUCKET_NAME,
                Body: data,
                ACL : 'public-read',
                ContentType: type,
                Key: newName,
            });
    
            await s3client.send(uploadcommand);
            console.log('File uploaded');
        }
        catch(err){
            console.error(err);
            return new Response('Internal Server Error', { status: 500 });
        }
        
        return new Response(JSON.stringify({ newName, content: file }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
