import { Observable } from 'rxjs/Observable';
import {RequestOptions, Headers, Response, Http} from "@angular/http";
import {User} from "../../backend/_models/user";

export abstract class UserApi {

  constructor(public http : Http) {}

}



