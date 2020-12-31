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
            comment: 'Share ke orang banyak deh biar makin viral'
        });
        video.save(function (err) {
            done();
        })
        console.log(video)
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
                res.body[0].should.have.property('comment');
                res.body[0].title.should.equal('Video viral 2020');
                res.body[0].description.should.equal('Video viral 2020 yang lagi viral banget pokoknya');
                res.body[0].comment.should.equal('Share ke orang banyak deh biar makin viral');
                done();
            })
    })
})