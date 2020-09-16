const button = document.getElementById('button-default');

// button is clicked - ✅
// call fetch API on githubs jobs url - ✅
// show loading state
// validate response
// parse
// update UI to display data

// [
//   {
//     "id": "569bfcdc-fad1-4563-ae57-8585831db596",
//     "type": "Full Time",
//     "url": "https://jobs.github.com/positions/569bfcdc-fad1-4563-ae57-8585831db596",
//     "created_at": "Sun Sep 06 14:30:27 UTC 2020",
//     "company": "Hotel Trades Council, AFL-CIO",
//     "company_url": "http://www.hotelworkers.org",
//     "location": "New York, NY",
//     "title": "Web Developer",
//     "description": "<p>The New York Hotel Trades Council, AFL-CIO, a labor union that represents nearly 40,000 workers in the hotel, gaming, and racing industries in the New York City area, seeks an experienced web developer.</p>\n<p>This COVID crisis has shown us the immense value to our Union of developing a more expansive and sophisticated website. Since March, the number of viewers to our site has increased seven-fold (to as many as 20,000 per day and more) and we are investing our resources accordingly. In fact, we have so many concrete ideas to put the site to new innovative uses, that our one full-time Web Developer has much more work to do than he can possibly handle. Among the new uses we are developing are:</p>\n<p>Conducting secret ballot ratification votes online;\nProviding multi-lingual content to an incredibly diverse membership (the current site supports English, Spanish and Chinese content);\nMobilizing rank-and-file political action in a private individually personalized Member Section;\nProviding non-union workers with a confidential communication channel with the union and interactive pages allowing them to compare their wages, benefits and working conditions to those enjoyed by unionized workers; and\nMany other applications.</p>\n<p>Our Union constantly seeks new ways to increase our effectiveness through smart use of technology and we are looking for a creative developer to help conceive of, design and implement tools to support the Union in our mission.</p>\n<p>This position offers the prospect of a great career and, as we are a labor union, an excellent benefit package.</p>\n<p>The team currently works remotely from home due to the COVID situation. When things return to normal, we intend to be flexible about remote work, and will consider skilled applicants who don’t live in the New York area.</p>\n<p>Starting salary: $70,000 to $85,000</p>\n<p>Benefits include: Medical, Dental, Optical, and Prescription Drugs with family coverage (including domestic partners); Pension, Pre-paid Legal, Flexible Spending Accounts, Life Cycle Benefits, Long-Term Care Insurance, and other benefits.</p>\n<p>Requirements:\nAt least 3 years developing websites using an MVC framework (with preference given to specific knowledge of Laravel PHP framework).\nStrong UI/UX design skills\nStrong javascript skills</p>\n<p>Other useful experience/qualifications:</p>\n<ul>\n<li>Advanced experience managing SQL databases</li>\n<li>Linux server administration</li>\n<li>Networking skills</li>\n<li>Python</li>\n</ul>\n",
//     "how_to_apply": "<p>Please submit a resume, three references and a cover letter to <a href=\"mailto:careers@nyhtc.org\">careers@nyhtc.org</a> with the subject line “Web Developer.”  The cover letter should be clear and concise and explain the specific reasons for your interest in the position, and specify (with appropriate explanation) which of each of the listed qualifications you possess and which ones you do not possess.</p>\n<p>The New York Hotel Trades Council, AFL-CIO, is an equal opportunity employer.  All persons regardless of age, race, ethnicity, gender, religious affiliation and sexual orientation are encouraged to apply.</p>\n",
//     "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE9KIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a30d608a910769a14438f7e0d7f3a673ca961499/HTC%20logo.jpg"
//   },
//   {
//     "id": "04206897-960f-466f-b80f-f2bf88c4f472",
//     "type": "Full Time",
//     "url": "https://jobs.github.com/positions/04206897-960f-466f-b80f-f2bf88c4f472",
//     "created_at": "Thu Sep 03 00:53:36 UTC 2020",
//     "company": "Hotel Trades Council, AFL-CIO",
//     "company_url": "http://www.hotelworkers.org",
//     "location": "New York",
//     "title": "FileMaker Pro Developer",
//     "description": "<p>The New York Hotel Trades Council, AFL-CIO, a large New York City labor union, seeks a highly experienced FileMaker Pro Developer to work in its FileMaker Development Department.</p>\n<p>Our integrated FileMaker system, consisting of over 100 files and thousands of related tables is extremely advanced and ambitious. We use it to manage many aspects of our operation. Furthermore, we are constantly multiplying the innovative ways in which we use it. For that reason, we have made a long-term investment (for over 20 years) in maintaining a permanent in-house FileMaker team, which we want to expand.</p>\n<p>Therefore, this position offers the prospect of a career and, as we are a labor union, an excellent benefit package.</p>\n<p>The team currently works remotely from home due to the COVID situation. When things return to normal, we intend to be flexible about remote work, and will consider skilled applicants who don’t live in the New York area.</p>\n<p>Starting salary: $75,000 to $90,000\nBenefits include: Medical, Dental, Optical, and Prescription Drugs with family coverage (including domestic partners); Pension, Pre-paid Legal, Flexible Spending Accounts, Life Cycle Benefits, Long-Term Care Insurance, and other benefits.</p>\n<p>Requirements:</p>\n<ul>\n<li>At least 5 years building and maintaining business applications using the FileMaker platform</li>\n<li>Advanced command of scripting, layout design, custom functions, privilege sets and relationship graph organization</li>\n<li>Command of the Mac OS X environment</li>\n</ul>\n<p>Other useful experience/qualifications:</p>\n<ul>\n<li>Working with web services in FileMaker (JSON/XML)</li>\n<li>UI/UX design</li>\n<li>AppleScript</li>\n<li>Networking skills</li>\n<li>Python</li>\n<li>JavaScript</li>\n</ul>\n",
//     "how_to_apply": "<p>Please submit a resume, three references and a cover letter to <a href=\"mailto:careers@nyhtc.org\">careers@nyhtc.org</a> with the subject line “FileMaker Pro Developer.” The cover letter should be clear and concise and explain the specific reasons for your interest in the position, and specify (with appropriate explanation) which of each of the listed qualifications you possess and which ones you do not possess. The New York Hotel Trades Council, AFL-CIO, is an equal opportunity employer. All persons regardless of age</p>\n",
//     "company_logo": null
//   }
// ]

const listContainer = document.querySelector('.list');

button.onclick = function click() {
  fetch(
    'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=javascript&location=new+york'
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let list = `<ul>`;
      response.forEach(
        (job) =>
          (list += `<li class='job-container'>job title: ${job.title}</li>`)
      );
      list += `</ul>`;
      listContainer.innerHTML = list;
    })
    .catch((error) => console.log('error: ', error));
};
