import siteConfig from '../config/config.json'
const Page = (props) => {
  console.log(props)
  return <p>hello world</p>
}

export default Page

export function getServerSideProps(context) {
  const selectedRegion = context.query.region
  const selectedRegionData = siteConfig.adminLoginUrls.filter(function(region){
    return region.location === selectedRegion
  })
  console.log(selectedRegionData.url)
  // context.res.writeHead(302, {
  //   Location: 'https://www.google.com'
  // });

  context.res.end();

  return {
    props: {}, 
  };
}