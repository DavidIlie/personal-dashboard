const serverRedirect = (res: any, location: string) => {
    res.setHeader("location", location);
    res.statusCode = 302;
    res.end();
};

export default serverRedirect;
