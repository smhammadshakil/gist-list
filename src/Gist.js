import './App.css';
import moment from 'moment';
import ForkedUsers from './ForkedUsers';

function Gist({ gist, loader, setPage, page }) {
  console.log(gist)

  return (
    <div>
        <div className="gist-container">
            {
                loader ? <div className="loader">Loading...</div> : ''
            }
            {
                gist.length && !loader ? gist.map(item => 
                    <div key={item.id} className="gist">
                        <span><b>Description:</b>{item.description}</span>
                        <div>
                            <b>Created:</b> {moment(item.created_at).startOf('day').fromNow()} / <b>Last Updated:</b> {moment(item.updated_at).startOf('day').fromNow()}
                        </div>
                        <div className="tags">
                            <b>Tags:</b> {
                                Object.keys(item.files).map(tag => <span key={tag} className="tag">{item.files[tag].type}</span>)
                            }
                        </div>
                        <ForkedUsers forkUrl={item.forks_url}/>
                    </div>
                ) : ''
            }
        </div>
        <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1} className="prev">{'<'}</button>
            <button onClick={() => setPage(page + 1)} className="next">{'>'}</button>
        </div>
    </div>
  );
}

export default Gist;
