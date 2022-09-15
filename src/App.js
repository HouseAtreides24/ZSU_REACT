import React, {useEffect, useState} from "react";
import './App.css'
//import McBook from "./Lesson1/McBook";
import Users from '../src/Lesson2/components/Users'
import '../src/Lesson2/styles.css'
import Details from '../src/Lesson2/components/Details'


// let mcBooks = [
//     {name:"Apple MacBook Air 13“ Space Gray M2" ,
//         id: "8/256 8GPU 2022 (MLXW3)",
//         photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1UwXg3pqEp-QhuLogo9m2pIliEXXFSQZXQ&usqp=CAU" ,
//         information:"Легкий, стильний та портативний новий Apple MacBook Air — ідеальний вибір як для студентів, так і професіоналів. MacBook пропонує стабільну та надійну операційну систему, інтуїтивно зрозумілу, зручну та доставляє візуальну насолоду. На роботі MacBook віддають перевагу професіонали з усіх напрямків. Незалежно від того, чи шукаєте ви машину, здатну редагувати відео або запускати щось елементарне, наприклад, електронну таблицю, ви виявите, що MacBook для вас. Доступний MacBook Air 2022 стане чудовою інвестицією.\n" +
//             "\n" +
//             "На WWDC 6 червня 2022 року Apple представила оновлений MacBook Air із чіпом M2. MacBook Air 2022 тепер оснащений чіпом M2 ( Air на базі M1 як і раніше буде доступний), дисплеєм з вирізом, в новій колірній палітрі, підтримкою MagSafe і багатьом іншим." },
//     {name: "Apple MacBook Pro 14\" Space Gray M1",
//         id: "Pro 16/512 8CPU 14GPU (MKGP3) 2021",
//         photo: "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_2122_7.jpg",
//         information:"Новые MacBook Pro представлены двумя моделями: 14 дюймов и 16 дюймов. Для каждой из них доступны два варианта процессоров – M1 Pro и M1 Max, высокий уровень производительности гарантирован. Их производительность превышает предыдущие решения в 3,7 раза, а обработка графики быстрее в 13 раз. Также автономность некоторых моделей достигает 21 часа. И это все благодаря 5-нанометровому техпроцессу. Добавьте к этому невероятный дисплей Liquid Retina XDR, качественную звук и камеру и еще больше портов для профессиональной работы. С данным ноутбуком все легко и возможно. Просмотр HDR-контента обещает быть очень впечатляющим." },
//     {name: "Ноутбук APPLE MacBook Pro M1 16 Space Grey",
//         id:"(MK183)" ,
//         photo:"https://i.eldorado.ua//goods_images/1039096/7444615-1634643530.jpg" ,
//         information:"Популярні фільтри\n" +
//             "Популярні фільтри\n" +
//             "Ноутбук з SSD\n" +
//             "Для роботи та навчання\n" +
//             "Для фотографа\n" +
//             "Загальні характеристики\n" +
//             "Серія\n" +
//             "MacBook Pro\n" +
//             "MacBook Pro 16\n" +
//             "Операційна система\n" +
//             "macOS\n" +
//             "Класифікація операційної системи\n" +
//             "Monterey\n" }
// ]
//
// function App() {
//     //console.log("WWWWWWWWWWW")
//         let myObj = {
//             name: "Vasyz",
//             age: 31
//         }
//
//
//
//   return (
//       <div>
//          <My>
//              My friends
//              My family
//              My mather
//          </My>
//       </div>
// );
// }
//
// export default App;
// import React from 'react';

// Events

const App = () => {
    // let [greeting,setGriting] = useState("Hello")
    // const add = ()=>{
    //     greeting+='!'
    //     setGriting(greeting);
    //     console.log(greeting)
    // }

    return (
        <div>

         {/*<button onClick={add}>Clisk</button>*/}
         {/*   {greeting}*/}
            <div className='flex-parent-element'>
                <div className='flex-child-element'>
                    <Users/>
                </div>
                <div className='flex-child-element'>

                </div>
            </div>



        </div>
    );
};

export default App;
