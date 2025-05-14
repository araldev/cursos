// En TypeScript, "fetching de datos" (o data fetching) se refiere a la acción de obtener datos de una fuente externa, típicamente una API, utilizando la función fetch() de JavaScript. Esta función es parte de la API Fetch y permite realizar peticiones HTTP a servidores para obtener datos de forma asíncrona. 

// Acá extraemos todos los repos de git que tengan la palabra "javascript" en su nombre
const API_URL = 'https://api.github.com/search/repositories?q=javascript'

// Bueno habría que cambiar la extensión .ts, ya que .ts de forma nativa no soporta el uso de fetch (import), habría que usar .mts ya que si permite el uso de import
const response = await fetch(API_URL)

if (!response.ok) {
    throw new Error('Network response was not ok')
}

// const data = await response.json()

// Hay un problema, y es que en este punto TS no ha inferido el tipo de dato de data, acá es any, y por lo tanto algo tan absurdo como

// data.djsjnajsnfjn

// No es un error...

// Una solución poco práctica sería hacer un nuevo tipo para tratar con el arreglo de objetos

// type APIResponse = {
//     items: object[]
// }

// data as APIResponse

// Pero eso no es práctico, ya que no sabemos la estructura de los objetos que devuelve la API

// data.items.forEach((repo: { name: string }) => {
//     console.log(repo.name)
// })

// Lo más inteligente es usar la web de quicktype para inferir el tipo de dato de la API, y luego usar ese tipo de dato para hacer una aserción de tipo
// https://app.quicktype.io/

export type GitHubAPIResponse = {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}

export type Item = {
    id:                          number;
    node_id:                     string;
    name:                        string;
    full_name:                   string;
    private:                     boolean;
    owner:                       Owner;
    html_url:                    string;
    description:                 null | string;
    fork:                        boolean;
    url:                         string;
    forks_url:                   string;
    keys_url:                    string;
    collaborators_url:           string;
    teams_url:                   string;
    hooks_url:                   string;
    issue_events_url:            string;
    events_url:                  string;
    assignees_url:               string;
    branches_url:                string;
    tags_url:                    string;
    blobs_url:                   string;
    git_tags_url:                string;
    git_refs_url:                string;
    trees_url:                   string;
    statuses_url:                string;
    languages_url:               string;
    stargazers_url:              string;
    contributors_url:            string;
    subscribers_url:             string;
    subscription_url:            string;
    commits_url:                 string;
    git_commits_url:             string;
    comments_url:                string;
    issue_comment_url:           string;
    contents_url:                string;
    compare_url:                 string;
    merges_url:                  string;
    archive_url:                 string;
    downloads_url:               string;
    issues_url:                  string;
    pulls_url:                   string;
    milestones_url:              string;
    notifications_url:           string;
    labels_url:                  string;
    releases_url:                string;
    deployments_url:             string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    git_url:                     string;
    ssh_url:                     string;
    clone_url:                   string;
    svn_url:                     string;
    homepage:                    null | string;
    size:                        number;
    stargazers_count:            number;
    watchers_count:              number;
    language:                    Language | null;
    has_issues:                  boolean;
    has_projects:                boolean;
    has_downloads:               boolean;
    has_wiki:                    boolean;
    has_pages:                   boolean;
    has_discussions:             boolean;
    forks_count:                 number;
    mirror_url:                  null;
    archived:                    boolean;
    disabled:                    boolean;
    open_issues_count:           number;
    license:                     License | null;
    allow_forking:               boolean;
    is_template:                 boolean;
    web_commit_signoff_required: boolean;
    topics:                      string[];
    visibility:                  Visibility;
    forks:                       number;
    open_issues:                 number;
    watchers:                    number;
    default_branch:              DefaultBranch;
    score:                       number;
}

export const enum DefaultBranch {
    Dev = "dev",
    Develop = "develop",
    Main = "main",
    Master = "master",
}

export const enum Language {
    CSS = "CSS",
    HTML = "HTML",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
}

export type License = {
    key:     string;
    name:    string;
    spdx_id: string;
    url:     null | string;
    node_id: string;
}

export type Owner = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    user_view_type:      Visibility;
    site_admin:          boolean;
}

export const  enum Type {
    Organization = "Organization",
    User = "User",
}

export const enum Visibility {
    Public = "public",
}

// Ya esta tipado

const data = await response.json() as GitHubAPIResponse

// Aunque TS no se queje esto no significa que esto sea seguro
data.items.map(repo => {
    return {
        name: repo.name,
        id: repo.id,
        url: repo.html_url
    }
})