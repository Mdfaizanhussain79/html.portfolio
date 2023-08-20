const patientForm = document.getElementById('patientForm');
const resultDiv = document.getElementById('result');
const symptomsSelect = document.getElementById('symptoms');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const genderSelect = document.getElementById('gender');

patientForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = ageInput.value;
  const gender = genderSelect.value;
  const selectedSymptom = symptomsSelect.value;

  // Perform logic to recommend a hospital based on the patient's selected symptom
  const recommendedHospital = recommendHospital(selectedSymptom);
  const hospitalLink = getHospitalLink(recommendedHospital); // Get the link based on the hospital's name

 resultDiv.innerHTML = `Recommended Hospital for ${name} (${age} years, ${gender}): 
  <a href="${hospitalLink}" target="_blank">${recommendedHospital}</a>`;
});

function recommendHospital(symptom) {
  switch (symptom) {
    case 'fever':
      return 'Fever Clinic';
    case 'cough':
      return 'Respiratory Health Center';
    case 'headache':
      return 'Neurology Hospital';
    case 'cancer':
      return 'Cancer Treatment Hospital';
    case 'lungs':
      return 'lungs treatment hospital';
    case 'heart':
      return 'heart treatment hospital';
    case 'diabetes':
      return'diabetes treatment hospital';
    case 'coronavirus':
      return'coronavirus treatment hospital';
    case 'others':
     return'general hospital';

// Add more cases for other symptoms here
default:
    return 'Generalal Hospital';
}
}

function getHospitalLink(hospitalName) {
// Here, you would implement logic to retrieve the link for the given hospital name
// For this example, let's assume you have a predefined mapping of hospital names and links
const hospitalLinks = {
  'Fever Clinic': 'https://www.google.co.in/maps/place/Med+Express+Pharmacy+%26+Clinic/@22.5747459,88.4211667,15z/data=!4m16!1m8!2m7!1sPharmacies!3m5!2sCollege+More!3s0x3a0275af120d560d:0x434b322edf816a16!4m2!1d88.4337624!2d22.5747463!3m6!1s0x3a027574db322b75:0xf50ad3af2f5022ee!8m2!3d22.5743233!4d88.4313339!15sCgpQaGFybWFjaWVzWgwiCnBoYXJtYWNpZXOSAQhwaGFybWFjeeABAA!16s%2Fg%2F11n1p6wvpp?entry=ttu',
  'Respiratory Health Center': 'https://www.google.co.in/maps/place/Department+Of+Respiratory+Medicine+NRS+Medical+College/@22.5648554,88.3713321,3a,75y,186.38h,90t/data=!3m7!1e1!3m5!1srhms4GV4s__ymZARZB7Rew!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Drhms4GV4s__ymZARZB7Rew%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D186.37784%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m17!1m8!2m7!1srespiratory+health+center!3m5!2sCollege+More!3s0x3a0275af120d560d:0x434b322edf816a16!4m2!1d88.4337624!2d22.5747463!3m7!1s0x3a02777cfb86b2e5:0x4ab4ade0ce68d41d!8m2!3d22.5645483!4d88.3712901!10e5!15sChlyZXNwaXJhdG9yeSBoZWFsdGggY2VudGVykgEObWVkaWNhbF9jZW50ZXLgAQA!16s%2Fg%2F11gkbh1h24?entry=ttu',
  'Neurology Hospital': 'https://www.google.co.in/maps/place/Neurology+Clinic-+Adult+and+Pediatric/@22.5118901,88.3028199,13z/data=!4m14!1m7!3m6!1s0x3a02711c5723510d:0x77b23970e893f4af!2sNeurology+Clinic-+Adult+and+Pediatric!8m2!3d22.5118902!4d88.3463146!16s%2Fg%2F11s8507_mp!3m5!1s0x3a02711c5723510d:0x77b23970e893f4af!8m2!3d22.5118902!4d88.3463146!16s%2Fg%2F11s8507_mp?entry=ttu',
  // Add more hospital links here
  'Cancer Treatment Hospital':'https://www.google.co.in/maps/place/GD+Hospital+%26+Diabetes+Institute/@22.5622143,88.3596164,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0276ffb07df0e5:0xa2740fd468bea2bf!8m2!3d22.5622143!4d88.3621913!16s%2Fg%2F11c52bdzqf?entry=ttu',
  'lungs treatment hospital':'https://www.google.com/maps/place/Kolkata+Heart+Lung+Centre/@22.5508978,88.299635,12z/data=!4m10!1m2!2m1!1slungs+treatment+in+kolkata!3m6!1s0x3a02717151449c53:0x5e4d3bdb497c5c23!8m2!3d22.4957189!4d88.3958855!15sChpsdW5ncyB0cmVhdG1lbnQgaW4ga29sa2F0YVocIhpsdW5ncyB0cmVhdG1lbnQgaW4ga29sa2F0YZIBBmRvY3RvcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSbGVYWnBTM2xSUlJBQuABAA!16s%2Fg%2F11q9ypnmh6?entry=ttu',
  'heart treatment hospital':'https://www.google.com/maps/place/Calcutta+Heart+Clinic+%26+Hospital/@22.5508558,88.2996348,12z/data=!4m10!1m2!2m1!1sheart+treatment+centre!3m6!1s0x3a0275c88968667f:0xe6f2bbc1a4de6ca0!8m2!3d22.5752413!4d88.4182828!15sChZoZWFydCB0cmVhdG1lbnQgY2VudHJlWhgiFmhlYXJ0IHRyZWF0bWVudCBjZW50cmWSAQhob3NwaXRhbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOdFp5MVFjV1JCRUFF4AEA!16s%2Fg%2F1tjjmsq5?entry=ttu',
  'diabetes treatment hospital':'https://www.google.com/maps/place/GD+Hospital+%26+Diabetes+Institute/@22.5622143,88.3526641,16z/data=!4m10!1m2!2m1!1sdiabetes+hospitals!3m6!1s0x3a0276ffb07df0e5:0xa2740fd468bea2bf!8m2!3d22.5622143!4d88.3621913!15sChJkaWFiZXRlcyBob3NwaXRhbHNaFCISZGlhYmV0ZXMgaG9zcGl0YWxzkgEQZ2VuZXJhbF9ob3NwaXRhbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSUE1GQnBRMDlCRUFF4AEA!16s%2Fg%2F11c52bdzqf?entry=ttu',
  'coronavirus treatment hospital':'https://www.google.com/maps/search/mrb+hospital/@22.5165347,88.3397109,13.59z?entry=ttu',
  'general hospital':'https://www.google.com/maps/place/P.G.Hospital+(S.S.K.M)/@22.5395441,88.3383983,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02773539b02e57:0xc8b17a7fdb712a75!8m2!3d22.5395442!4d88.3432692!16s%2Fg%2F11h_44z7lg?entry=ttu',
  'General Hospital': 'https://www.google.co.in/maps/place/Tata+Medical+Center/@22.5770971,88.477057,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020acd5dd9e251:0x505400043d5f0066!8m2!3d22.5770971!4d88.4796319!16s%2Fg%2F11hzcl3sv2?entry=ttu',
};

return hospitalLinks[hospitalName] || '#';
}