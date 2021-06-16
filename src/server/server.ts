import * as ORM from 'sequelize';
import {Sequelize} from 'sequelize';
const config = require('config');

const dbUrl = config.dbUrl;
const options = {benchmark: true, logging: console.log};
const sequelize = new Sequelize(dbUrl, options);

const CourseModel = sequelize.define('Course', {
    description: ORM.STRING,
    url: ORM.STRING,
    longDescription: ORM.TEXT,
    iconUrl: ORM.STRING,
    courseListIcon: ORM.STRING,
    seqNo: ORM.INTEGER,
    comingSoon: ORM.BOOLEAN,
    isNew: ORM.BOOLEAN,
    isOngoing: ORM.BOOLEAN
});

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.log('Unable to connect to the database:', error));

CourseModel.findAll()
        .then((results) => {
            console.log(JSON.stringify(results));
        })
        .catch((error) => {
            console.log(error);
        })


console.log('Server is running...!');