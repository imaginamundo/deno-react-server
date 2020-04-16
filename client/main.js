const routes = window.__routes;
const currentRoute = window.__currentRoute;
const props = window.__initialProps;

console.log(React);
console.log(ReactDOM);
console.log(routes);
console.log(currentRoute);
console.log(props);

async function dynamicImportPage(file) {
  console.log(file);

  const filePath = file
    .replace('.', '/bundles')
    .replace('.jsx', '.js');

  console.log(filePath);

  const { default: Page } = await import(filePath);
  console.log(Page);

  ReactDOM.hydrate(
    React.createElement(Page, props, null),
    document.getElementById('root')
  );
}

dynamicImportPage(currentRoute.origin);

// Clean up
delete window.__initialProps;
delete window.__routes;
delete window.__currentRoute;
