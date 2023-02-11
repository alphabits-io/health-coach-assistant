var Airtable = require('airtable');
import { sendConsultationSchedulingEmail } from '../../services/aws-ses';
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

function addSubscriberToWaitlist(email) {
  base('Users').create([
    {
      fields: { email }
    }
  ], function(err, records) {
    if (err) { console.error(err); return; }
    // console.log(record.getId());
    // console.log({ err, record })
    // console.log({ records });
  });
}

export default function handler(req, res) {
  const { email } = JSON.parse(req.body);

  if (email) {
    addSubscriberToWaitlist(email);
    sendConsultationSchedulingEmail(email);
    return res.status(200).json({ success: true });
  }

  res.status(400).json({ success: false });
}