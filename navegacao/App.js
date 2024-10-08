import { StyleSheet, Text, View, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const dia = [
    {title: '01'},
    {title: '02'},
    {title: '03'},
    {title: '04'},
  ];

  const hora = [
    {title: '07:00'},
    {title: '08:00'},
    {title: '09:00'},
    {title: '10:00'},
  ];

  const laboratorio = [
    {title: 'Auditório'},
    {title: 'Lab de Automação'},
    {title: ''},
    {title: 'sad'},
  ];

  const responsavel = [
    {title: 'Auditório'},
    {title: 'Lab de Automação'},
    {title: ''},
    {title: 'sad'},
  ];

  const estudantes = [
    {title: 'Auditório'},
    {title: 'Lab de Automação'},
    {title: ''},
    {title: 'sad'},
  ];



export default function App() {
    return (

        <ScrollView>

<SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          {selectedItem && (
            <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
          )}
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Dia'}
          </Text>
          <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />


        </ScrollView>

        );
    }

    const styles = StyleSheet.create({

        dropdownButtonStyle: {
            width: 200,
            height: 50,
            backgroundColor: '#E9ECEF',
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 12,
          },
          dropdownButtonTxtStyle: {
            flex: 1,
            fontSize: 18,
            fontWeight: '500',
            color: '#151E26',
          },
          dropdownButtonArrowStyle: {
            fontSize: 28,
          },
          dropdownButtonIconStyle: {
            fontSize: 28,
            marginRight: 8,
          },
          dropdownMenuStyle: {
            backgroundColor: '#E9ECEF',
            borderRadius: 8,
          },
          dropdownItemStyle: {
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 12,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 8,
          },
          dropdownItemTxtStyle: {
            flex: 1,
            fontSize: 18,
            fontWeight: '500',
            color: '#151E26',
          },
          dropdownItemIconStyle: {
            fontSize: 28,
            marginRight: 8,
          },
        });

