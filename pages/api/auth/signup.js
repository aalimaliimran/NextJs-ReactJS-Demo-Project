import { hashPassword } from '../../../lib/bcrypt';
import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res){

    if (req.method !== 'POST') {
        return;
      }
    
      const data = req.body;
      const { fname, uname, email, password, role } = data;
      const client = await connectToDatabase();
      const db = client.db();

      const existingEmail = await db.collection('credentialUsers').findOne({ email: email});
 
    
      if (existingEmail) {
        res.status(422).json({ message: 'Email Address already Exists' });
        client.close();
        return;
      }
    
      const hashedPassword = await hashPassword(password);
    
      const result = await db.collection('credentialUsers').insertOne({
        fname: fname,
        uname: uname,
        email: email,
        password: hashedPassword,
        role:role

      });
    
      res.status(201).json({ message: 'Created user!' });
      client.close();
}