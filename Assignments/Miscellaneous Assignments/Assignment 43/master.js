const apiUrl = "https://api.github.com/users/ElzeroWebSchool/repos";
const tableBody = document.querySelector("div.result table tbody");

const fetchData = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.map((item) => ({
            name: item.name,
            stars: item.stargazers_count,
            visitLink: item.html_url,
        }));
    } catch (error) {
        throw new Error(
            `Fetching Error: ${error.name}\nContent: ${error.message}`
        );
    }
};

const createRow = (repo) => {
    const row = document.createElement("tr");

    const createCell = (content) => {
        const cell = document.createElement("td");
        cell.innerHTML = content;
        return cell;
    };

    row.appendChild(createCell(repo.name));
    row.appendChild(createCell(repo.stars));

    const linkCell = document.createElement("td");
    const visitLinkElement = document.createElement("a");
    visitLinkElement.href = repo.visitLink;
    visitLinkElement.innerHTML = "Visit";
    visitLinkElement.target = "_blank";
    linkCell.appendChild(visitLinkElement);
    row.appendChild(linkCell);

    return row;
};

const appendData = async () => {
    try {
        const repoData = await fetchData();

        repoData.slice(0, 15).forEach((repo) => {
            const row = createRow(repo);
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error(`Error appending data: ${error.message}`);
    }
};

appendData();
