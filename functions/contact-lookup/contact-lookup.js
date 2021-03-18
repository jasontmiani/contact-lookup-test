// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

//Steps
/* Steps 

1. create an endpoint
2. 
*/

//
const handler = async (event) => {
  //thisendpoint.com/?phone=16268624782
  console.log(JSON.stringify(event));
  if (!event.queryStringParameters.phone) {
    return {
      statusCode: 333,
      body: { message: 'nope' }
    };
  }
  try {
    
    //lookup the contact through the customers crm via api
    /*const { userId, firstName, lastName, email } = await fetch(
      `https://rest.gohighlevel.com/v1/contacts/lookup?email=john@deo.com&phone=${phoneNumber}`
    );*/
    //lookup reqeuest ()

    const phoneNumber = event.queryStringParameters.phone


    //comes from customer crm
    const crmData = [{
      firstName: 'jason',
      lastName: 'miani',
      phoneNumber: "+16268624782",
      emailAddress: 'jasontmiani@gmail.com'
    }]


    const output = {
      found: true,
      contact: {
        first_name: crmData[0].firstName,
        last_name: crmData.lastName,
        url: 'someurl that links to contact in crm',
        contact_id: 'the contact id in the crm',
        email: 'email@address.com',
        phone_number: crmData.phoneNumber,
        town: '',
        postal: '',
        state: '',
        address: ''
      },
      deal: {
        title: '',
        value: '',
        status: '',
        stage: '',
        deal_id: '',
        url: ''
      },
      org: {
        name: 'name of org'
      }
    };
    // actual lookup in the customer's crm
   

    return {
      statusCode: 200,
      body: JSON.stringify(output)
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
