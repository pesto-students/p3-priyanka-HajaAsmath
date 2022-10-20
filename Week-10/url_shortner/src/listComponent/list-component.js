import './list-component.css'
import {useState} from 'react'

function ListComponent(props) {

    let [isCopied, setIsCopied] = useState(-1);

    async function copyTextToClipboard(text) {
        if('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleClick = (e) => {
        const link = e.currentTarget.previousSibling;
        copyTextToClipboard(link.innerText).then(() => {
            setIsCopied(e.target.id);
            setTimeout(() => {
                setIsCopied(-1);
            }, 1000);
        })
    }

    return <div className='url-list'>
    <div className='url-content'>
        <ul>
            {props.urlList.map((url,id) => {
                return <li key={id} className='url-container'>
                            <span className='actual-url'>{url[0]}</span>
                            <span>
                                <span className='shorter-url'>{url[1]}</span>
                                <button className='copyBtn' id={id} type='button' onClick={handleClick}>{(isCopied==id)?'Copied!':'Copy'}</button>
                            </span>
                    </li>
            })}
        </ul>
    </div>
</div>
}

export default ListComponent;