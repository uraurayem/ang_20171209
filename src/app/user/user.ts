export class User { 
    userNo : number ;
    userId : string ; 
    userName : string ; 
    userPwd : string ; 
    userAge : number;
    complete : boolean  ;
    diNo : number ;
    token :string ; 
    constructor (value : Object = {} ) { // 생성자
        Object.assign(this, value );
    }
    

}
