// generally mai yha p prisma ko connect karunge okkh! 
// like hamm mongodb m nahi karte the await db.coonect() something wahi okkh!...

// isko rat le bhai ye ek tarikhe ka global connection deta hai ek bar use kar liya to har jagah use karnge okkh!.. bina connection likhe 
// bcz in nextjs hot reloding hota hai aur connection hame har jagh karna padta hai 
// that's the reason hamm yha p prisma ko globalyy use kar lenge okkh! yha p ek bar likh liya hai tp har jagah use kar sakte hai without any connecyion likhe okkh..

import {PrismaClient} from '@prisma/client';

// ye hamm typescript k liye use karte hai okkh!...
declare global {
     var prisma : PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production'){
     globalThis.prisma = db
}


// Hamm prisma ko connect nextjs mai aise hi karte hai okkh!..
// and isko hamm ek jagah hi iplemnet kar lete hai and ye har jagah use hote chla jata hai okh!.. like har jagah connect hota chla jata hai..

