export class User { 
    userNo : number ;
    userId : string ; 
    userName : string ; 
    userPwd : string ; 
    complete : boolean  ;
    token :string ; 
    constructor (value : Object = {} ) { // 생성자
        Object.assign(this, value );
    }
    

}
