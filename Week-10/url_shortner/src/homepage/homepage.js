import './homepage.css'
import ListComponent from '../listComponent/list-component';
import {useState} from 'react';

function MainContent() {

    const [urlList, setUrlList] = useState([]);
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    let handleChange = (e) => {
        if(e.target.name === 'url') {
            setUrl(e.target.value);
        }
    }

    let getShortLink = async (e) => {
        e.preventDefault();
        document.querySelector('#submitBtn').classList.add('spinner');
        const apiLink = 'https://api.shrtco.de/v2/shorten?url=';
        await fetch(apiLink+url).then(async res => {
            if(!res.ok){
                document.querySelector('#submitBtn').classList.remove('spinner');
                const response = await res.json()
                throw Error(response.error);
            }
            return res.json()
        }).then(json => {
            document.querySelector('#submitBtn').classList.remove('spinner');
            setError('');
             setUrlList((urlList) => {
                return [[url,json.result.full_short_link], ...urlList];
             })
        }).catch(err => {
            setError(err.message);
        });
    }

    return <main>
        <p className='quote'>More than just shorter links</p>
        <p className='desc'>Build your brand's recognition and get detailed insights on how your links are</p>
        <div className='main-content'>
            <div className='shortner'>
                <form className='shortner-form' onSubmit={getShortLink}>
                    <input name='url' id='url-input' type='url' onChange={handleChange}/>
                    <input id='submitBtn' type='submit'/>
                </form>
            </div>
            <span className='error'>{error}</span>
            {urlList.length>0?<ListComponent urlList={urlList}/>:null}
        </div>
    </main>
}

export default MainContent;