'use strict'

const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('../app');
const Category = require("../models/category");

const should = chai.should();
chai.use(chaiHTTP);

describe('category', function () {
    Category.collection.drop();

    beforeEach(function (done) {
        let category = new Category({
            category: 'kriminal',
        });
        category.save(function (err) {
            done();
        })
    })

    afterEach(function (done) {
        Category.collection.deleteMany({});
        done()
    })

    it('Should list ALL Category on /api/category GET', function (done) {
        chai.request(server)
            .get('/api/category')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('category');
                res.body[0].category.should.equal('kriminal');
                done();
            })
    })

    it('Should add a SINGLE Category on /api/category POST', function (done) {
        chai.request(server)
            .post('/api/category')
            .send({ 'category': 'konspirasi' })
            .end(function (err, res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('category');
                res.body.should.have.property('_id');
                res.body.category.should.equal('konspirasi');
                done();
            })
    })

    it('Should update a SINGLE Category on /api/category/<id> PUT', function (done) {
        chai.request(server)
            .get('/api/category')
            .end(function (err, res) {
                chai.request(server)
                    .put(`/api/category/${res.body[0]._id}`)
                    .send({ category: 'kriminal' })
                    .end(function (err, response) {
                        response.should.have.status(201);
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.should.have.property('category');
                        response.body.should.have.property('_id');
                        response.body.category.should.equal('kriminal');
                        done();
                    })
            })
    })

    it('Should delete a SINGLE Category on /api/siswa/<id> DELETE', function (done) {
        chai.request(server)
            .get('/api/category')
            .end(function (err, res) {
                chai.request(server)
                    .delete(`/api/category/${res.body[0]._id}`)
                    .end(function (err, response) {
                        response.should.have.status(201)
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.should.have.property('category');
                        response.body.should.have.property('_id');
                        response.body.category.should.equal('kriminal');
                        done();
                    })
            })
    })
});