import {h} from 'preact';
import {useState} from 'preact/hooks';
import {ProvidersDecorator} from '.storybook/Providers';
import {Button} from '../Button';
import {Overlay} from '../Overlay';
import {Stack} from '../Stack';
import {Select} from './Select';

export default {
  title: 'Select',
  component: Select,
  decorators: [ProvidersDecorator],
};

const Template = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      css={`
        height: 2000px;
      `}
    >
      <Button onClick={() => setOpened(true)}>open overlay</Button>
      <Overlay
        opened={opened}
        setOpened={setOpened}
        cancelOnEscKey
        cancelOnOutsideClick
        position={{mode: 'centered'}}
        withBackdrop
        noAutoFocus
        disableBodyScroll
        css={`
          width: 50rem;
          background: var(--bg-overlay);
          height: 20rem;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Stack direction="row" gap={6} alignItems="flex-start">
          <Select
            placeholder="Select one!"
            onChange={(evt) => {
              console.log(evt);
            }}
            searchable
            size="sm"
            /* multiple */
            options={[
              {value: '1', label: 'Madrid'},
              {value: '2', label: 'Barcelona'},
              {value: '3', label: 'Valencia'},
              {value: '4', label: 'Sevilla'},
              {value: '5', label: 'Zaragoza'},
              {value: '6', label: 'Málaga'},
              {value: '7', label: 'Murcia'},
              {value: '8', label: 'Palma'},
              {value: '9', label: 'Las Palmas de Gran Canaria'},
              {value: '10', label: 'Bilbao'},
              {value: '11', label: 'Alicante'},
              {value: '12', label: 'Córdoba'},
              {value: '13', label: 'Valladolid'},
              {value: '14', label: 'Vigo'},
              {value: '15', label: 'Gijón'},
              {value: '16', label: 'Hospitalet de Llobregat'},
              {value: '17', label: 'Vitoria'},
              {value: '18', label: 'La Coruña'},
              {value: '19', label: 'Granada'},
              {value: '20', label: 'Elche'},
              {value: '21', label: 'Oviedo'},
              {value: '22', label: 'Badalona'},
              {value: '23', label: 'Cartagena'},
              {value: '24', label: 'Terrassa'},
              {value: '25', label: 'Jerez de la Frontera'},
              {value: '26', label: 'Sabadell'},
              {value: '27', label: 'Móstoles'},
            ]}
          />
          <Select
            placeholder="Multiple Large!"
            onChange={(evt) => {
              console.log(evt);
            }}
            searchable
            defaultValue={'15'}
            options={[
              {value: '1', label: 'Madrid'},
              {value: '2', label: 'Barcelona'},
              {value: '3', label: 'Valencia'},
              {value: '4', label: 'Sevilla'},
              {value: '5', label: 'Zaragoza'},
              {value: '6', label: 'Málaga'},
              {value: '7', label: 'Murcia'},
              {value: '8', label: 'Palma'},
              {value: '9', label: 'Las Palmas de Gran Canaria'},
              {value: '10', label: 'Bilbao'},
              {value: '11', label: 'Alicante'},
              {value: '12', label: 'Córdoba'},
              {value: '13', label: 'Valladolid'},
              {value: '14', label: 'Vigo'},
              {value: '15', label: 'Gijón'},
              {value: '16', label: 'Hospitalet de Llobregat'},
              {value: '17', label: 'Vitoria'},
              {value: '18', label: 'La Coruña'},
              {value: '19', label: 'Granada'},
              {value: '20', label: 'Elche'},
              {value: '21', label: 'Oviedo'},
              {value: '22', label: 'Badalona'},
              {value: '23', label: 'Cartagena'},
              {value: '24', label: 'Terrassa'},
              {value: '25', label: 'Jerez de la Frontera'},
              {value: '26', label: 'Sabadell'},
              {value: '27', label: 'Móstoles'},
            ]}
          />
          <Select
            disabled
            size="lg"
            placeholder="Disabled"
            options={[
              {label: 'Option 1', value: '1'},
              {label: 'Option 2', value: '2'},
            ]}
          />
        </Stack>
      </Overlay>
    </div>
  );
};

export const Default = Template.bind({});
