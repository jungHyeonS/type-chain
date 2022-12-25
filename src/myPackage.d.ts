//JS로 구성되어있는 패키지 라이브러리 등을 TS에서 사용할수있도록
//TS에게 패키지,라이브러리의 모양을 설명해주는 파일입니다
interface Config{
    url : string
}
declare module "myPackage"{
    function init(config : Config):boolean
    function exit(code:number) : number
}