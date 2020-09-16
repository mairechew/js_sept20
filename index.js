const button = document.getElementById('button-default');

button.onclick = function click() {
  console.log('clicking');
};

const jobsButton = document.getElementById('get-jobs')

jobsButton.onclick = function click() {
  const resultsDiv = document.getElementById('jobs-results')
  resultsDiv.innerText = 'Loading...'

  fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=javascript')
    .then(response => response.json())
    .then(function (data) {
      const formattedJobsList = data.reduce((acc, d) => {
        return acc += `<div>
                     <div class="company-header"><img src="${d.company_logo}"/><h5> Company Name: ${d.company} </h5></div>
                     <span>URL: ${d.company_url}</span>
                     ${d.how_to_apply}
                 </div>`;
      }, '')
      resultsDiv.innerHTML = formattedJobsList;
    })
}