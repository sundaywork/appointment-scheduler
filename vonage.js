const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'a090791d',
  apiSecret: '5UfDBFioWWng1gXG',
});

const from = 'Vonage SMS API';
const to = '64211213088';
const text = 'Test';


nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})