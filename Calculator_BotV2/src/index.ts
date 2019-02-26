import * as functions from 'firebase-functions';  //getting firebase functions
let admin = require("firebase-admin")    //getting firebase admin and using a module in an app
admin.initializeApp(functions.config().firebase)  //initializing the default app
// let firestore = admin.firebase

export const webhookTs = functions.https.onRequest((request, response) => {
 
    const params = request.body.queryResult.parameters  //intializing parameters
    const paramsintentname = request.body.queryResult.intent.displayName  //getting parameters from dialogflow
    switch (paramsintentname) {

        case 'Add':

            response.send({

                fulfillmentText: `The Addition of ${parseFloat(params.num1)} and ${parseFloat(params.num2)}
                 is ${parseFloat(params.num1) + parseFloat(params.num2)} ` //for adding two numbers

            })
            break

        case 'Subtract':

            response.send({

                fulfillmentText: `The Subtraction of ${parseFloat(params.num1)} and ${parseFloat(params.num2)}
                 is ${parseFloat(params.num1) - parseFloat(params.num2)}` //for subtracting two numbers

            })
            break

        case 'Multiply':

            response.send({

                fulfillmentText: `The Multiplication of ${parseFloat(params.num1)} and ${parseFloat(params.num2)}
                 is ${parseFloat(params.num1) * parseFloat(params.num2)}` //for Multiplication of two numbers

            })
            break

        case 'Divide':
            {
        //condition for zero denominator        
                if (parseFloat(params.num2) === 0) {
                    response.send({
                        fulfillmentText: `Sorry! I can not divide it with zero`
                    })
                }
                else {
                    response.send({

                        fulfillmentText: `The Division of ${parseFloat(params.num1)} and ${parseFloat(params.num2)}
                         is ${parseFloat(params.num1) / parseFloat(params.num2)}` //For division of two numbers

                    })
                }
            }
            break

        default:
            {
                response.send({

                    fulfillmentText: `The required operation is not available`
                })
            }


}});
