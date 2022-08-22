const express = require('express')
const app = expres()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const willingDoctors = {
    'George Zaharias': {
        city: 'Alabaster',
        state: 'Alabama'
    },
    'Jessica Rodriguez': {
        city: 'Alabaster',
        state: 'Alabama'
    },
    'Margaret Miklic': {
        city: 'Birmingham',
        state: 'Alabama'
    },
    'Meagan Byrne ': {
        city: 'Anchorage',
        state: 'Alaska'
    },
    'Lori Lindsay': {
        city: 'Soldotna',
        state: 'Alaska'
    },
    'Lindy Vanlandingham': {
        city: 'Flagstaff',
        state: 'Arizona'
    },
    'Eugene Adel': {
        city: 'Mesa',
        state: 'Arizona'
    },
    'Christina Green': {
        city: 'Benton',
        state: 'Arkansas'
    },
    'Shelly Gibbs': {
        city: 'Little Rock',
        state: 'Arkansas'
    },
    'August Accetta': {
        city: 'Bakers Field',
        state: 'California'
    },
    'Dario Gambetta': {
        city: 'Folsom',
        state: 'California'
    },
    'Michael Moore': {
        city: 'Denver',
        state: 'Colorado'
    },
    'Autumn Stowe-Quain': {
        city: 'Colorado Springs',
        state: 'Colorado'
    },
    'Danielle Finch': {
        city: 'New Haven',
        state: 'Connecticut'
    },
    'Amanda B. Rostkowski': {
        city: 'Hamden',
        state: 'Connecticut'
    },
    'Sylvester Booker': {
        city: 'Washington ',
        state: 'DC'
    },
    'Larissa Guran': {
        city: 'Washington ',
        state: 'DC'
    },
    'Reiesha Graham': {
        city: 'Milford',
        state: 'Delaware'
    },
    'Sarah Hall': {
        city: 'Smyrna',
        state: 'Delaware'
    },
    'Natasha Spencer': {
        city: 'Altamonte Springs',
        state: 'Florida'
    },
    'Stacia Dzikunu': {
        city: 'Albany',
        state: 'Georgia'
    },
    'Erin Gertz': {
        city: 'Honolulu',
        state: 'Hawaii'
    },
    'Monika Fealko': {
        city: 'Boise',
        state: 'Idaho'
    },
    'Jasmine A. Munoz': {
        city: 'Des Plaines, Elk Grove Village',
        state: 'Illinios'
    },
    'Rani Ramaswamy': {
        city: 'Carmel',
        state: 'Indiana'
    },
    'Laura R. Witthoeft': {
        city: 'Dubuque',
        state: 'Iowa'
    },
    'Jessica Poteet': {
        city: 'Hutchinson',
        state: 'Kansas'
    },
    'Stephen Hall': {
        city: 'Frankfort',
        state: 'Kentucky '
    },
    'Neelima Sukhavasi': {
        city: 'Baton Rouge',
        state: 'Louisiana'
    },
    'Alec Anderson': {
        city: 'Bangor',
        state: 'Maine'
    },
    'Elizabeth Ernst-Signore': {
        city: 'Baltimore',
        state: 'Maryland'
    },
    'Annalise J. Boisvert': {
        city: 'Dartmouth',
        state: 'Massachusetts'
    },
    'Yuliya Malayev': {
        city: 'Commerce',
        state: 'Michigan'
    },
    'Gita Byraiah': {
        city: 'Edina',
        state: 'Minnesota'
    },
    'Tracia West': {
        city: 'Liberty / Kansas City',
        state: 'Missouri'
    },
    'Megan Prickett': {
        city: 'Omaha',
        state: 'Nebraska '
    },
    'Toni Hodges-Wills, DO': {
        city: 'Las Vegas',
        state: 'Nevada'
    },
    'Lydia Garcia ': {
        city: 'Nashua ',
        state: 'New Hampshire'
    },
    'Lauren A. Jenkins, MD': {
        city: 'Woodbury Heights  ',
        state: 'New Jersey'
    },
    'Amber Truehart': {
        city: 'Albuquerque',
        state: 'New Mexico'
    },
    'Rachel Flink-Bochacki': {
        city: 'Albany',
        state: 'New York'
    },
    'Ashley Fento': {
        city: 'Charlotte',
        state: 'North Carolina'
    },
    'Rachel Peterson': {
        city: 'Bismarck ',
        state: 'North Dakota'
    },
    'Whitney Sommers': {
        city: 'Akron',
        state: 'Ohio'
    },
    'Amanda Maxedon Hamilton': {
        city: 'Oklahoma City',
        state: 'Oklahoma'
    },
    'OHSU Complex Family Planning': {
        city: 'Portland',
        state: 'Oregon'
    },
    'Jessica Klemens': {
        city: 'Abington',
        state: 'Pennsylvania'
    },
    'Mariola Llinas': {
        city: 'San Juan',
        state: 'Puerto Rico'
    },
    'Beth Cronin': {
        city: 'Providence',
        state: 'Rhode Island'
    },
    'Dianna Ravenell': {
        city: 'Columbia',
        state: 'South Carolina'
    },
    'Breanne Mueller': {
        city: 'Aberdeen ',
        state: 'South Dakota'
    },
    'Erin Black': {
        city: 'Knoxville',
        state: 'Tennesee'
    },
    'Romy Ghosh': {
        city: 'Austin',
        state: 'Texas'
    },
    'Amanda Cleveland': {
        city: 'Salt Lake City',
        state: 'Utah'
    },
    'Sarah Decker': {
        city: 'Rutland',
        state: 'Vermont'
    },
    'Jennifer Doorey': {
        city: 'Charlottesville ',
        state: 'Virginia'
    },
    'Pilar Baquero-Young': {
        city: 'Issaquah ',
        state: 'Washington'
    },
    'Alex Poulsen': {
        city: 'Charleston',
        state: 'West Virginia'
    },
    'Gretchen Augustine': {
        city: 'Appleton, Neenah, Shawano',
        state: 'Wisconsin'
    },
    'Lindsay Capron': {
        city: 'Sheridan ',
        state: 'Wyoming'
    },
}

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})