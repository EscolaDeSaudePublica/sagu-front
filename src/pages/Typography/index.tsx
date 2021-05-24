import { Divider, Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import { useState } from 'react';
import GenericContent from 'src/components/GenericContent';
import FiltrosModal from 'src/components/modals/FiltrosModal';

const textBase =
  'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Atirei o pau no gatis, per gatis num morreus. ';

const variants: Variant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'overline',
  'subtitle1',
  'subtitle2',
];

const TypographyPage: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <GenericContent helmetText="Typography | Sagu" title="Typography">
      {variants.map((varitant, index) => (
        <div key={index}>
          <Typography variant={varitant}>
            {varitant}: {textBase}
          </Typography>
          {index !== variants.length && <Divider />}
        </div>
      ))}
      <FiltrosModal
        open={open}
        filtros={{ turma: 0, periodo: 0, nucleo: 0, enfase: 0 }}
      />
    </GenericContent>
  );
};

export default TypographyPage;
