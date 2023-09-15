import { useState, useMemo } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import colors from "style/colors";
import Touchable from "../Touchable";
import AppText from "../AppText";
import TextField from "../TextField";
import PickerWithSearchItem from "./PickerWithSearchItem";

function AppPickerWithSearch({
  loading,
  items,
  placeholder,
  searchPlaceHolder,
  style,
  selectedItem,
  onSelectItem,
  numColumns = 1,
  PickerItemComponent = PickerWithSearchItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterText, setFilterText] = useState("");

  const filteredItems = useMemo(() => {
    return items?.filter((b) => {
      if (b) {
        const trimmedTitle = b?.name?.toLowerCase().trim();
        return trimmedTitle.includes(filterText.toLowerCase().trim());
      }
    });
  }, [filterText, items]);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* Picker Field */}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View className={style}>
          {selectedItem?.name ? (
            <AppText className="font-Regular text-[15px] flex-1">
              {selectedItem.name}
            </AppText>
          ) : (
            <AppText className="flex-1 text-[15px] text-grey-700">
              {placeholder}
            </AppText>
          )}
          <View>
            <AntIcon name="down" color={colors.grey[700]} size={15} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <SafeAreaView className="flex-1">
          <View className="flex-row items-center justify-center h-[56px] py-2 px-3 border-b-[1px] border-grey-200">
            <Touchable
              className="rounded-[50px] bg-white flex items-center justify-center z-10 h-10 w-10 mr-1"
              onPress={closeModal}
            >
              <AntIcon name="arrowleft" size={24} />
            </Touchable>
            <TextField
              placeholder={searchPlaceHolder}
              className="flex-1 h-[46px] px-3 text-[18px] bg-transparent border-0"
              value={filterText}
              onChangeText={(value) => setFilterText(value)}
              editable={!loading}
            />
          </View>
          <>
            {loading ? (
              <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color={colors.primary[700]} />
              </View>
            ) : filteredItems.length > 0 ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                numColumns={numColumns}
                data={filteredItems}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                  <PickerItemComponent
                    item={item}
                    onPress={() => {
                      setModalVisible(false);
                      onSelectItem(item);
                    }}
                  />
                )}
              />
            ) : (
              <View className="flex-1 items-center justify-center">
                <AppText className="text-[18px]">
                  Sorry, Data not fount.
                </AppText>
              </View>
            )}
          </>
        </SafeAreaView>
      </Modal>
    </>
  );
}

export default AppPickerWithSearch;
