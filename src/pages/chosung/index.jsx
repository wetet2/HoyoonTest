import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   &:before{
      content:'\\ac00'
   }
`;

let list = [
   { name: '이호윤' },
   { name: '이아' },
   { name: '이종혁' },
   { name: '김보현' },
   { name: '심혜인' },
   { name: '김서현' },
   { name: '유준호' },
   { name: '짜장면'},
   { name: '까만색'},
   { name: '빨간색'}
]

const charList = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']

const Chosung = () => {

   const [filtered, setFiltered] = useState(list);

   const handleChange = (e) => {
      const searchText = e.target.value || ''
      let result = list.filter(e => e.name.indexOf(searchText) >= 0 || e.chosung.indexOf(searchText) >= 0)
      console.log(result);
      setFiltered(result)
   }

   useEffect(() => {
      list.forEach(e => {
         e.chosung = e.name.split('').map(c => {
            let pos = (c.charCodeAt() - 0xAC00) / 588;
            return charList[parseInt(pos)]
         }).join('')

         e.chosung = e.name.split('').map(c => {
            let pos = (c.charCodeAt() - 0xAC00) / 588;
            return parseInt(pos)
         }).join('')

      })

      console.log(2, list);

   }, [])

   return (
      <Container>
         <div>
            <input type="text" onChange={handleChange} />
         </div>
         <ul>
            {
               filtered.map((e, idx) => <li key={idx}>{e.name}</li>)
            }
         </ul>

      </Container>
   )
}

export default Chosung