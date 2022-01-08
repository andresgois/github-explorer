
export function RepositoryItem(props){
    return (
        <li>
            <strong>{props.repository?.name ?? 'Dafault'}</strong>
            <p>
                {props.repository.description}
            </p>
            <a href={props.repository.html_url}>
                {props.repository.html_url}
            </a>
        </li>

    );
}