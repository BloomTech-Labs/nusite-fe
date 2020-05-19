const config: {
   local: string;
   development: string;
   production: string;
   [propName: string]: string;
} = {
   local: "localhost:4000/graphql",
   development: "https://partnerd-staging.herokuapp.com/graphql",
   production: "https://partnerd-master.herokuapp.com/graphql",
};

export default config;
