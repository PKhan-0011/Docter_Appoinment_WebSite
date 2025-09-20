// isse hamm actaully data check karnge like ki user login hai bhi ya nahi okkh!...

import { currentUser } from "@clerk/nextjs/server"
import {db} from './prismaConnect';

// Yha p hame koi POST and Get lagane ki need nahi hai okkh!...

    export const checkUser = async () => {

          const user = await currentUser();
          
          // agar user logout hai to user m hame null milega okkh!..
          // but agar login hai to hame {id, name, email, imageurl etc etc..}

            console.log(user);

          if(!user){
            // iska mtlb ye hai ki user exist hi nhai krta hai okkh!...
            // logout hai okkh!.. koi data nahi milega...
            return user
          }
            
          // iska matlb ye hia ki koi data hai login hai 

          try{
              
            const loggedInUser = await db.user.findunique({
                     where: {
                        clerkId: user.id,
                     }
            });

            if(loggedInUser){
                // iska matlb ye hai ki user ka data mil gya hai okkh!...
                console.log(loggedInUser);
                return loggedInUser
            }
             
            // agar user ka data mila hi nahi to 
            // but wo login hai..

            // agar id nahi mila hai to usko put karo okkh!...

               // yha p firstName alg hai and last name alag  hai that's why hame alg s name ka varaible banana padega okkh!..
                
               const name = `${user.firstName} + ${user.lastName}`

              const userName = await db.user.create({
                    data:{
                        clerkUserId: user.id,
                         name,
                         imageUrl: user.imageUrl,
                         email: user.emailAddresses[0].emailAddress,

                         transactions: {
                            create: {
                                type: "CREDIT_PURCHASE",
                                amount: 2,
                                packageId: 'free_user'
                            }
                         }
                    }
               });
                  
               console.log(userName);
                 return userName;

          }

          catch(error){
               const err = error as Error;
                 console.log(err);
                 throw new Error(' Error are there ', err);
          }
    }

    // Iska follow kuch is hisab ka hai like ki agar user Login hi nahi hai to return kardo 
    // but agar login hai  to data check karo kya wo exist karta hai 
    // agar karta hai to thik hai otherwise data Put karo okkh!...

      
    // *** RealationShip wali bate hai yha p okkh!.. 
   
    // Yha p ye dhyan rakhio like ki relationship p teen chize aur extra ati hai like ki {connect, create, connectAndCreate..,}
    // connect ka matlb existing user m hi jod do okkh!..
    // create ka matlb ye hoga ki kuch data craete karo okkh!..
    // create and connect ka matlb ye hoga ki create karke connect kardo okkh!..