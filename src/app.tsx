import {useState, useEffect} from 'preact/hooks'
import './app.css'
import {Repo} from "./components/Repo";
import './index.css';

export function App() {
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/tubadan33/repos')
            .then(res => res.json().then(j => {
                setRepos(j.map((r: { id: string; name: string; full_name: string; forks_count: number; stargazers_count: number; watchers_count: number; description: string; html_url: string; }) => (
                    <Repo
                        key={r.id}
                        repo={{
                            id: r.id,
                            name: r.name,
                            fullName: r.full_name,
                            forksCount: r.forks_count,
                            starsCount: r.stargazers_count,
                            watchCount: r.watchers_count,
                            description: r.description,
                            href: r.html_url
                        }}
                    />
                )));
            }));
        setLoading(false);
    }, []);

    console.log(repos);

    return loading ? (
        <div id='loadingContainer'>
            <div class='spinner'></div>
        </div>) : (
        <div id='mainContent' class='mainContent'>
            <div id='profileContainer'>
                <img
                    class='profilePicture'
                    src='https://avatars.githubusercontent.com/u/33641614?v=4'
                    alt='Profile Picture'
                />
                <div class='info'>
                    <div class='name'>Daniel Herrera</div>
                    <div>Full stack developer</div>
                    <div>3 years professional experience</div>
                </div>
            </div>
            <div class='repos' id='repos'>
                {repos}
            </div>
        </div>);
}
