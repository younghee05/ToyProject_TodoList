import { css } from "@emotion/react";

// 전체적인 container 의 큰 틀
export const containerBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    width: 400px;
    height: 700px;
    border: 2px solid #686363;
    background-color: #ebebeb;
    box-shadow: 12px 12px 0 #ebebeb ;
`;

// 컨테이너 안에 목록들 디자인 
export const container = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0p 0px 10px 0px;
    width: 100%;
    border-bottom: 2px solid #dbdbdb;
`;

// list font & 위치 디자인
export const inputLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    width: 100%;
    font-size: 23px;
`;

// checkBox 디자인
export const checkBox = css`
    box-sizing: border-box;
    margin-left: 10px;
    margin-bottom: 5px;
    cursor: pointer;
`;

// 각 container의 제목 디자인
export const h2Title = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 10px 0px;
    width: 100%;
    height: 70px;
    border-bottom: 3px solid #3f3f3f;
    background-color: #000000;
    color: #ebebeb;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

`;

// 수정 & 삭제 button의 큰 틀
export const buttonLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-bottom: 5px;
    width: 100%;
`;

// 수정버튼 디자인
export const todoUpdateButton = css`
    box-sizing: border-box;
    margin-right: 20px;
    color: #000000;
    cursor: pointer;

`;

// 삭제버튼 디자인
export const todoDeleteButton = css`
    box-sizing: border-box;
    margin-right: 5px;
    color: #000000;
    cursor: pointer;
`;

// modal 창 큰 틀
export const modalLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: #919191;
    *:focus {
        outline: none;
    }
    
`;

// modal창의 제목
export const modalH2Title = css`
    box-sizing: border-box;
    margin-bottom: 40px;
    padding: 5px;
    background-color: #6c6c6c;
    box-shadow: inset 0 0 3px #333;
    color: #ebebeb;
    font-family: 'ONE-Mobile-POP';
    @font-face {
        font-family: 'ONE-Mobile-POP';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
`;

// modal창의 입력창
export const modalInput = css`
    box-sizing: border-box;
    width: 80%;
    height: 40px;
    font-size: 20px;
    font-family: 'Ownglyph_meetme-Rg';
    @font-face {
        font-family: 'Ownglyph_meetme-Rg';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
`;

// modal 완료 & 취소 버튼 큰틀
export const modalCompleteAndCancelLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100px;
    height: 40px;
`;

// modal 완료 버튼
export const modalComplete = css`
    box-sizing: border-box;
    margin: 6px 15px 0px 0px;
    padding: 0;
    width: 100%;
    height: 100%;
    color: #7cc778;
    background-color: transparent;
    border: none;
    cursor: pointer;

`;

// modal 취소 버튼
export const modalCancel = css`
    box-sizing: border-box;
    margin-left: 15px; 
    padding: 0;
    width: 100%;
    height: 100%;
    color: #f44141;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;


