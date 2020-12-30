'use strict'

const chai = require('chai');
const chaiHTTP = require('chai-http');
const bcrypt = require('bcrypt');

const server = require('../app');
const User = require('../models/user');
const should = chai.should();

chai.use(chaiHTTP);

describe('User', () => {
    User.collection.drop();

    beforeEach(done => {
        bcrypt.hash('1234', 10).then(password => {
            const user = new User({
                name: 'Yuda',
                email: 'yuda10@gmail.com',
                password: password
            })
            user.save()
                .then(() => done())
                .catch(err => console.log(err));
        });
    });

    afterEach(done => {
        User.collection.deleteMany();
        done();
    })

    it('Should be registered', done => {
        chai.request(server)
            .post('/api/user/register')
            .send({
                name: 'Yuda',
                email: 'yuda@gmail.com',
                password: '12345',
                retypepassword: '12345'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.data.email.should.equal('yuda@gmail.com');
                done();
            });
    });

    it("Shouldn't registered and token is null", done => {
        chai
            .request(server)
            .post('/api/user/register')
            .send({
                name: 'Yuda',
                email: 'yuda10@gmail.com',
                password: '1234',
                retypepassword: '12345'
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.should.be.json;
                res.body.should.have.property('message');
                res.body.message.should.be.a('string');
                res.body.message.should.equal('invalid data password and retypepassword');
                done();
            });
    });


    it("Shouldn't be logged in and token is null", done => {
        chai
            .request(server)
            .post('/api/user/login')
            .send({
                email: undefined,
                password: undefined
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.should.be.json;
                res.body.should.have.property('message');
                res.body.message.should.be.a('string');
                res.body.message.should.equal('email or password incorrect');
                done();
            });
    });

    it("Shouldn't be logged in and token is null", done => {
        chai
            .request(server)
            .post('/api/user/login')
            .send({
                email: 'yuda@gmail.com',
                password: '123456789'
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.should.be.json;
                res.body.should.have.property('message');
                res.body.message.should.be.a('string');
                res.body.message.should.equal('email or password incorrect');
                done();
            });
    });

    it('Should be logged in and got the token', done => {
        chai
            .request(server)
            .post('/api/user/login')
            .send({
                email: 'yuda@gmail.com',
                password: '1234'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('data');
                res.body.data.should.be.a('string');
                res.body.should.have.property('token');
                res.body.data.should.be.a('string');
                done();
            });
    });

    // it('Should accepted the token', done => {
    //     chai
    //         .request(app)
    //         .post('/api/users/login')
    //         .send({
    //             email: 'ikhdamuhammad@gmail.com',
    //             password: '1234'
    //         })
    //         .end((err, res) => {
    //             chai
    //                 .request(app)
    //                 .post('/api/users/check')
    //                 .set('token', res.body.token)
    //                 .end((error, response) => {
    //                     expect(response).to.have.status(200);
    //                     expect(response).to.be.json;
    //                     expect(response.body).to.have.property('valid');
    //                     expect(response.body.valid).to.be.a('string');
    //                     expect(response.body.valid).to.equal('true');
    //                     done();
    //                 });
    //         });
    // });


})

