const jsonUrl =
'https://okwiielvis.github.io/makerere-student-s-admission-list/admission.json'
fetch(jsonUrl)
.then(response => admission.json())
.then(data => { visualizeData(data);
})
.catch(error => console.error('Error fetching data:', error));
