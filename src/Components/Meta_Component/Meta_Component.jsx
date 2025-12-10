
import { Helmet } from 'react-helmet';

const Meta_Component = ({ title, description, canonical, Children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      {Children}
    </>

  );
};

export default Meta_Component;
