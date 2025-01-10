import { Fragment } from "react";
import PostItem from "./post-item";

export const dummyData=[
    {slug:'alphabet-a',clasify:'Featured',  image:'alpabet-a.png', title:'Alphabet A', date:'2020-10-01', excerpt:'The letter A is the first letter of the English alphabet and is considered a vowel. It is often used as a symbol for various concepts, such as in grading systems where it represents excellence. The letter A also appears in many words and plays a key role in language structure and phonetics.'},
    {slug:'alphabet-b',clasify:'Consonant', image:'alpabet-b.png', title:'Alphabet B', date:'2021-11-02', excerpt:'The letter B is the second letter of the English alphabet and is a consonant. It is often associated with the sound b as in ball or book. The letter B is commonly used in language and represents various concepts, such as in the grading system where it usually stands for good performance.'},
    {slug:'alphabet-c',clasify:'Consonant', image:'alpabet-c.png', title:'Alphabet C', date:'2022-12-03', excerpt:'The letter C is the third letter of the English alphabet and is a consonant. It has a soft sound, like in cat, or a hard sound, like in circuit, depending on the following letters. C is often used in abbreviations and plays a key role in many words, making it an essential part of language and communication.'},
    {slug:'alphabet-d',clasify:'Featured', image:'alpabet-d.png', title:'Alphabet D', date:'2023-10-04', excerpt:'The letter D is the fourth letter of the English alphabet and is a consonant. It represents a voiced sound, like in dog or dance. The letter D is commonly used in words and plays an important role in both spoken and written language.'},
    {slug:'alphabet-e',clasify:'vowel', image:'alpabet-e.png', title:'Alphabet E', date:'2024-11-05', excerpt:'The letter E is the fifth letter of the English alphabet and is a vowel. It is the most commonly used letter in the English language, appearing in many words such as eat, elephant, and experience. The letter E also plays a crucial role in phonetics, often influencing the pronunciation of other letters and sounds.'},
    {slug:'alphabet-f',clasify:'Consonant', image:'alpabet-f.png', title:'Alphabet F', date:'2020-12-06', excerpt:'The letter F is the sixth letter of the English alphabet and is a consonant. It represents the f sound, as in words like fish and friend." The letter F is often used in various contexts, such as grading systems where it denotes failure or in scientific terms like force or frequency.'},
    {slug:'alphabet-g',clasify:'Featured', image:'alpabet-g.png', title:'Alphabet G', date:'2021-10-07', excerpt:'The letter G is the seventh letter of the English alphabet and is a consonant. It can represent both a hard sound, like in go, and a soft sound, like in giant. The letter G is widely used in words across various fields, from everyday language to technical terms like gravity and genetics.'},
    {slug:'alphabet-h',clasify:'Consonant', image:'alpabet-h.png', title:'Alphabet H', date:'2022-11-08', excerpt:'The letter H is the eighth letter of the English alphabet and is a consonant. It represents the h sound, as in words like house and happy. The letter H is important in both phonetics and grammar, often used to form question words like how and who.'},
    {slug:'alphabet-a',clasify:'Featured',  image:'alpabet-a.png', title:'Alphabet A', date:'2020-10-01', excerpt:'The letter A is the first letter of the English alphabet and is considered a vowel. It is often used as a symbol for various concepts, such as in grading systems where it represents excellence. The letter A also appears in many words and plays a key role in language structure and phonetics.'},
    {slug:'alphabet-b',clasify:'Consonant', image:'alpabet-b.png', title:'Alphabet B', date:'2021-11-02', excerpt:'The letter B is the second letter of the English alphabet and is a consonant. It is often associated with the sound b as in ball or book. The letter B is commonly used in language and represents various concepts, such as in the grading system where it usually stands for good performance.'},
    {slug:'alphabet-c',clasify:'Consonant', image:'alpabet-c.png', title:'Alphabet C', date:'2022-12-03', excerpt:'The letter C is the third letter of the English alphabet and is a consonant. It has a soft sound, like in cat, or a hard sound, like in circuit, depending on the following letters. C is often used in abbreviations and plays a key role in many words, making it an essential part of language and communication.'},
    {slug:'alphabet-d',clasify:'Featured', image:'alpabet-d.png', title:'Alphabet D', date:'2023-10-04', excerpt:'The letter D is the fourth letter of the English alphabet and is a consonant. It represents a voiced sound, like in dog or dance. The letter D is commonly used in words and plays an important role in both spoken and written language.'},
    {slug:'alphabet-e',clasify:'Vowel', image:'alpabet-e.png', title:'Alphabet E', date:'2024-11-05', excerpt:'The letter E is the fifth letter of the English alphabet and is a vowel. It is the most commonly used letter in the English language, appearing in many words such as eat, elephant, and experience. The letter E also plays a crucial role in phonetics, often influencing the pronunciation of other letters and sounds.'},
    {slug:'alphabet-f',clasify:'Consonant', image:'alpabet-f.png', title:'Alphabet F', date:'2020-12-06', excerpt:'The letter F is the sixth letter of the English alphabet and is a consonant. It represents the f sound, as in words like fish and friend." The letter F is often used in various contexts, such as grading systems where it denotes failure or in scientific terms like force or frequency.'},
    {slug:'alphabet-g',clasify:'Featured', image:'alpabet-g.png', title:'Alphabet G', date:'2021-10-07', excerpt:'The letter G is the seventh letter of the English alphabet and is a consonant. It can represent both a hard sound, like in go, and a soft sound, like in giant. The letter G is widely used in words across various fields, from everyday language to technical terms like gravity and genetics.'},
    {slug:'alphabet-h',clasify:'Consonant', image:'alpabet-h.png', title:'Alphabet H', date:'2022-11-08', excerpt:'The letter H is the eighth letter of the English alphabet and is a consonant. It represents the h sound, as in words like house and happy. The letter H is important in both phonetics and grammar, often used to form question words like how and who.'}

];
function PostGrid(props){
    if (props.clasifyType === 'xxx')
    {
        return <p className="font-bold text-center text-xl">{`no posts for ${props.clasifyType} `}</p>
    }
    return  <Fragment>
     <h2 className="text-center font-extrabold text-3xl p-3" >{props.clasifyType} Posts</h2>
    <ul className="flex flex-wrap justify-around">
        {dummyData.map((post)=> (
            <PostItem key={dummyData.slug} post={post} clasifyType = {props.clasifyType}/>))
            
        }
    </ul>
</Fragment>
}
export default PostGrid;



