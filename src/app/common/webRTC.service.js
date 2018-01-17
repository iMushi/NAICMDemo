"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WebRTCService = (function () {
    function WebRTCService() {
        this._navigator = navigator;
    }
    WebRTCService.prototype.startStream = function (hardwareVideo, photoCanvas) {
        var _this = this;
        var video = hardwareVideo.nativeElement;
        this._navigator = navigator;
        this._navigator.getUserMedia = (this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
            || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia);
        this._navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
            _this.localStream = stream;
            video.srcObject = stream;
            video.play();
        });
    };
    WebRTCService.prototype.takePicture = function (hardwareVideo, photoCanvas) {
        var pc = document.querySelector('#photoCanvas');
        var video = document.querySelector('#hardwareVideo');
        pc.setAttribute('width', video.videoWidth);
        pc.setAttribute('height', video.videoHeight);
        pc.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        var data = pc.toDataURL('image/png');
        //
        // let photoEle = document.createElement('img');
        // photoEle.src = data;
        // document.body.appendChild(photoEle);
        return data;
    };
    WebRTCService.prototype.stopStream = function () {
        var tracks = this.localStream.getTracks();
        tracks.forEach(function (track) {
            track.stop();
        });
    };
    return WebRTCService;
}());
WebRTCService = __decorate([
    core_1.Injectable()
], WebRTCService);
exports.WebRTCService = WebRTCService;
