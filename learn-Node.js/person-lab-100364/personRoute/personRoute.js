const express = require('express');
const persons = require('../person')
const { calAge } = require('../utils/dateUtil')

const router = express.Router();

router.get('/all', (req, res, next) => {
    res.status(200).json({
        person: persons,
        count: persons.length
    });
});

router.get('/male', (req, res, next) => {
    // console.log(persons[0].gender)
    personMale = persons.filter((item, index) => 
           item.gender === 'Male'
        )
    // console.log(personMale)
    res.status(200).json({
        person: personMale,
        count: personMale.length
    });
});

router.get('/female', (req, res, next) => {
    // console.log(persons[0].gender)
    personFemale = persons.filter((item, index) => 
           item.gender === 'Female'
        )
    // console.log(personFemale)
    res.status(200).json({
        person: personFemale,
        count: personFemale.length
    });
});

router.get('/oldest', (req, res, next) => {
    // console.log(persons[0].birthdate)
    // console.log(new Date(persons[0].birthdate))
    // console.log((new Date(persons[0].birthdate)).toString())
    // console.log(new Date(persons[0].birthdate).getTime())
    personBirthdateGetTime = persons.map((item, index) => 
            ((new Date(item.birthdate)).getTime())
        )
    // console.log(personBirthdateGetTime)
    personBirthdateGetTimeOnlyOneMin = Math.min( ...personBirthdateGetTime )
    // console.log(personBirthdateGetTimeOnlyOneMin)
    // console.log(new Date(personBirthdateGetTimeOnlyOneMin))
    // console.log((new Date(personBirthdateGetTimeOnlyOneMin)).toString())

    personBirthdateGetTimeOnlyOneMinAllData = persons.filter((item, index) => 
        ((new Date(item.birthdate)).getTime()) == personBirthdateGetTimeOnlyOneMin
    )
    res.status(200).json({  
        person: personBirthdateGetTimeOnlyOneMinAllData
    });
});

router.get('/youngest', (req, res, next) => {
    // console.log(persons[0].birthdate)
    // console.log(new Date(persons[0].birthdate))
    // console.log((new Date(persons[0].birthdate)).toString())
    // console.log(new Date(persons[0].birthdate).getTime())
    personBirthdateGetTime = persons.map((item, index) => 
            ((new Date(item.birthdate)).getTime())
        )
    // console.log(personBirthdateGetTime)
    personBirthdateGetTimeOnlyOneMax = Math.max( ...personBirthdateGetTime )
    // console.log(personBirthdateGetTimeOnlyOneMax)
    // console.log(new Date(personBirthdateGetTimeOnlyOneMax))
    // console.log((new Date(personBirthdateGetTimeOnlyOneMax)).toString())

    personBirthdateGetTimeOnlyOneMaxAllData = persons.filter((item, index) => 
        ((new Date(item.birthdate)).getTime()) == personBirthdateGetTimeOnlyOneMax
    )
    res.status(200).json({  
        person: personBirthdateGetTimeOnlyOneMaxAllData
    });
});

router.get('/greater-20-old', (req, res, next) => {
    // console.log((persons[0].birthdate).slice(0,4))
    personBirthdateGetTime = persons.map((item, index) => 
            ((new Date(item.birthdate)).getTime())
        )
    personGreater20 = persons.filter((item, index) => 
           new Date().getFullYear() - item.birthdate.slice(0,4) > 20
        )
    // console.log(personGreater20)
    res.status(200).json({
        // person: personGreater20,
        count: personGreater20.length
    });
});

// 50.73
router.get('/average-age', (req, res, next) => {
    // console.log(persons[0].birthdate)
    // console.log((new Date(persons[0].birthdate)))
    // console.log((new Date(persons[0].birthdate)).getTime())
    // console.log(persons[0].birthdate.slice(0,10))
    // console.log((new Date(persons[0].birthdate.slice(0,10))))
    // console.log((new Date(persons[0].birthdate.slice(0,10))).getTime())


    // personBirthdateGetTime_noTime = persons.map((item, index) => 
    //     ((new Date((item.birthdate.slice(0,10))).getTime()))
    // )

    // // console.log(personBirthdateGetTime_noTime)

    // today = Date.now()

    // // console.log(today)

    // personsAge = personBirthdateGetTime_noTime.map((item, index) => 
    //     (new Date(today - item)).getFullYear() - 1970
    // )

    // // console.log(personsAge)

    // personsAgeSum = personsAge.reduce((acc, item, index) => {
    //     return acc + item
    // }, 0)

    // res.status(200).json({
    //     'average-age': personsAgeSum / persons.length
    // });

    // console.log(personsAgeSum/persons.length)

    // console.log(sumPersonBirthdateGetTime)
    // console.log(new Date(sumPersonBirthdateGetTime))
    // console.log((new Date(sumPersonBirthdateGetTime).getFullYear()))
    // console.log(new Date().getTime())
    // res.status(200).json({
    //     'average-age': (new Date().getFullYear()) - (new Date(sumPersonBirthdateGetTime).getFullYear())

    // });


    personBirthdateGetTime = persons.map((item, index) => 
            ((new Date(item.birthdate)).getTime())
        )
    sumPersonBirthdateGetTime = personBirthdateGetTime.reduce((acc, item, index, arr) => {
        return acc + item
    }, 0)

    console.log(sumPersonBirthdateGetTime)
    console.log(new Date(sumPersonBirthdateGetTime))
    console.log((new Date(sumPersonBirthdateGetTime).getFullYear()))
    console.log(new Date().getTime())
    res.status(200).json({
        'average-age': (new Date().getFullYear()) - ((new Date(sumPersonBirthdateGetTime/111))).getFullYear()

    });
});

module.exports = router;