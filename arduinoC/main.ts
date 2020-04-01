
//% color="#AA278D" iconWidth=50 iconHeight=40
 namespace ZDJH{
//     //% block="ZDJH pin[P] name[N] [T]" blockType="reporter"
//     //% P.shadow="dropdown"   P.options="P"
//     //% N.shadow="dropdown"   N.options="N"
//     //% T.shadow="dropdown"   T.options="T"

//     export function ZDJHInitC(parameter: any, block: any) {
//         let p=parameter.P.code;
//         let n=parameter.N.code;
//         let t=parameter.T.code;


//         Generator.addInclude('ZDJHInitinclude', '#include <dht11.h>');
//         Generator.addObject("ZDJHInitobjectdht","dht11"," DHT;");
//         // Generator.addObject("ZDJHInitobjectDHT11", "#define", "DHT11_PIN 9");
//         Generator.addObject("ZDJHInitobjectH","int","airHumidity;//空气湿度");
//         Generator.addObject("ZDJHInitobjectT","int"," airTemperature;//空气温度");
//         Generator.addObject("ZDJHInitobjectS","int"," soilHumidity;//土壤湿度");
//         // Generator.addSetup("ZDJHInitsetupSerial", "Serial.println(9,DHT11_PIN);");
//         // Generator.addCode("Serial.println(DHT.getTemperature());");
//         // Generator.addCode("Serial.println(DHT.getHumidity()");
//         Generator.addSetup("ZDJHInitinclude11",`DHT.read(${p});`);
//         Generator.addCode(`DHT.${p}`);

//     }

//     //% block="ZDJH read[S] " blockType="boolean"
//     //% S.shadow="dropdownRound"  S.options="S"
    
//     export function ZDJHInitP(parameter: any, block: any) {
//         let s=parameter.S.code;
//         Generator.addCode("DHT.read(9)");
 
//         }

     //% block="ZDJH read pin[P] dht11[D] " blockType="reporter"
     //% P.shadow="dropdownRound"   P.options="P"
     //% D.shadow="dropdownRound"   D.options="D"
     export function ZDJHInitD(parameter: any, block: any) {
         let p=parameter.P.code;
         let d=parameter.D.code;
         
         Generator.addInclude('ZDJHInitinclude', '#include <dht11.h>');
         Generator.addObject("ZDJHInitobjectdht","dht11"," DHT;");
         // Generator.addObject("ZDJHInitobjectDHT11", "#define", "DHT11_PIN 9");
         Generator.addObject("ZDJHInitobjectH","int","airHumidity;//空气湿度");
         Generator.addObject("ZDJHInitobjectT","int"," airTemperature;//空气温度");
         Generator.addObject("ZDJHInitobjectS","int"," soilHumidity;//土壤湿度");

         
        Generator.addSetup("ZDJHInitinclude11",`DHT.read(${p});`);
        Generator.addCode(`DHT.${d}`);
         
     }


     //% block="ZDJH read soil[I] " blockType="reporter"
     //% I.shadow="dropdownRound"   I.options="I"
     export function ZDJHInitI(parameter: any, block: any) {
        Generator.addInclude('ZDJHInitinclude', '#include <dht11.h>');
        Generator.addObject("ZDJHInitobjectdht","dht11"," DHT;");
        // Generator.addObject("ZDJHInitobjectDHT11", "#define", "DHT11_PIN 9");
        Generator.addObject("ZDJHInitobjectH","int","airHumidity;//空气湿度");
        Generator.addObject("ZDJHInitobjectT","int"," airTemperature;//空气温度");
        Generator.addObject("ZDJHInitobjectS","int"," soilHumidity;//土壤湿度");
         let i=parameter.I.code;
        Generator.addCode(`analogRead(${i})`);

     }


     //% block="ZDJH csh pin[A] [B] [Z]" blockType="command"
     //% A.shadow="dropdown" A.options="A"
     //% B.shadow="dropdown" B.options="B"
     //% Z.shadow="dropdown" Z.options="Z"
     export function ZDJHInitA(parameter: any, block: any) {
         let a=parameter.A.code;
         let b=parameter.B.code;
         let z=parameter.Z.code;
         Generator.addSetup("ZDJHInitSetup1",`pinMode(${a}, OUTPUT);`);
         Generator.addSetup("ZDJHInitSetup2",`pinMode(${b}, OUTPUT);`);
        //  Generator.addSetup("ZDJHInitSetup3",`pinMode(${a}, ${z});`);
        //  Generator.addSetup("ZDJHInitSetup4",`pinMode(${b}, ${z});`);
        Generator.addCode(`digitalWrite(${a}, ${z});`);
        Generator.addCode(`digitalWrite(${b}, ${z});`);

     }

    
}
