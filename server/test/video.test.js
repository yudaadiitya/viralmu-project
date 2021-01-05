'use strict'

const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('../app');
const Video = require("../models/video");

const should = chai.should();
chai.use(chaiHTTP);

describe('video', function () {
    Video.collection.drop();

    beforeEach(function (done) {
        let video = new Video({
            title: 'Video viral 2020',
            description: 'Video viral 2020 yang lagi viral banget pokoknya',
            url: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
            comment: { comments: 'Share ke orang banyak deh biar makin viral' }
        });
        video.save(function (err) {
            done();
        })
        // console.log(video)
    })

    afterEach(function (done) {
        Video.collection.deleteMany({});
        done()
    })

    it('Should list ALL Video on /api/video GET', function (done) {
        chai.request(server)
            .get('/api/video')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('title');
                res.body[0].should.have.property('description');
                res.body[0].should.have.property('url');
                res.body[0].should.have.property('comment');
                res.body[0].title.should.equal('Video viral 2020');
                res.body[0].description.should.equal('Video viral 2020 yang lagi viral banget pokoknya');
                res.body[0].url.should.equal('https://www.youtube.com/watch?v=xcJtL7QggTI');
                res.body[0].comment.should.be.a('array')
                done();
            })
    })

    it('Should add a SINGLE Video on /api/video POST', function (done) {
        chai.request(server)
            .post('/api/video')
            .send({
                title: 'Video viral 2021',
                description: 'Video viral 2021 yang lagi viral banget pokoknya',
                url: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
                comment: { comments: 'Share ke orang banyak deh biar makin viral' }
            })
            .end(function (err, res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('_id');
                res.body.should.have.property('title');
                res.body.should.have.property('description');
                res.body.should.have.property('url');
                res.body.should.have.property('comment');
                res.body.title.should.equal('Video viral 2021');
                res.body.description.should.equal('Video viral 2021 yang lagi viral banget pokoknya');
                res.body.url.should.equal('https://www.youtube.com/watch?v=xcJtL7QggTI');
                res.body.comment.should.be.a('array')
                done();
            })
    })

    it('Should update a SINGLE Video on /api/video/<id> PUT', function (done) {
        chai.request(server)
            .get('/api/video')
            .end(function (err, res) {
                chai.request(server)
                    .put(`/api/video/${res.body[0]._id}`)
                    .send({
                        title: 'Video viral 2020',
                        description: 'Video viral 2020 yang lagi viral banget pokoknya',
                        url: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
                        comment: { comments: 'Share ke orang banyak deh biar makin viral' }
                    })
                    .end(function (err, response) {
                        response.should.have.status(201);
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.should.have.property('_id');
                        response.body.should.have.property('title');
                        response.body.should.have.property('description');
                        response.body.should.have.property('url');
                        response.body.should.have.property('comment');
                        response.body.title.should.equal('Video viral 2020');
                        response.body.description.should.equal('Video viral 2020 yang lagi viral banget pokoknya');
                        response.body.url.should.equal('https://www.youtube.com/watch?v=xcJtL7QggTI');
                        response.body.comment.should.be.a('array')
                        done();
                    })
            })
    })

    it('Should delete a SINGLE Category on /api/video/<id> DELETE', function (done) {
        chai.request(server)
            .get('/api/video')
            .end(function (err, res) {
                chai.request(server)
                    .delete(`/api/video/${res.body[0]._id}`)
                    .end(function (err, response) {
                        response.should.have.status(201)
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.should.have.property('_id');
                        response.body.should.have.property('title');
                        response.body.should.have.property('description');
                        response.body.should.have.property('url');
                        response.body.should.have.property('comment');
                        response.body.title.should.equal('Video viral 2020');
                        response.body.description.should.equal('Video viral 2020 yang lagi viral banget pokoknya');
                        response.body.url.should.equal('https://www.youtube.com/watch?v=xcJtL7QggTI');
                        response.body.comment.should.be.a('array');
                        done();
                    })
            })
    })
})