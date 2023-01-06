exports.getIndexPage = (req, res) => {
    res.status(200).render('index',{
        page_name: 'index',
    });
};

exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
};

exports.getContactPage = (req,res) => {
    res.status(200).render('contact', {
        page_name: 'contact'
    });
};

exports.getPortfolioPage = (req, res) => {
    res.status(200).render('portfolio',{
        page_name: 'portfolio',
    });
};

exports.getSinglePage = (req, res) => {
    res.status(200).render('single',{
        page_name: 'single',
    });
};

exports.getElementPage = (req, res) => {
    res.status(200).render('elements',{
        page_name: 'elements'
    });
};