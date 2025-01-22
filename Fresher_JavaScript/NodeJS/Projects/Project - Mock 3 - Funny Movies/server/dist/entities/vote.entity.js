"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base/base.entity");
const movie_entity_1 = require("./movie.entity");
const user_entity_1 = require("./user.entity");
let Vote = class Vote extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vote.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => movie_entity_1.Movie),
    __metadata("design:type", movie_entity_1.Movie)
], Vote.prototype, "movie", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Vote.prototype, "user", void 0);
Vote = __decorate([
    (0, typeorm_1.Entity)('vote')
], Vote);
exports.Vote = Vote;
//# sourceMappingURL=vote.entity.js.map