import { Helmet } from "react-helmet";
import { schemas } from "./Schemas";

const Meta_Component = ({
  title,
  description,
  canonical,

  schemaKey,
  Children
}) => {
  const selectedSchema = schemaKey ? schemas[schemaKey] : null;

  return (
    <>
      <Helmet>
        {/* BASIC SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* SCHEMA */}
        {selectedSchema && (
          <script type="application/ld+json">
            {JSON.stringify(selectedSchema)}
          </script>
        )}
      </Helmet>
      {Children}
    </>
  )
};

export default Meta_Component;
