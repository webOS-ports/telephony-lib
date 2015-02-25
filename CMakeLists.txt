project(telephony-lib)

cmake_minimum_required(VERSION 2.8.8)

find_package(Qt5Core)
find_package(Qt5Qml)

set(TELEPHONY_QML_DIR ${OE_QMAKE_PATH_QML}/LuneOS/Telephony)

set(TELEPHONY_EXTERNAL_FILES
    external/phonenumber.js/PhoneNumber.js
    external/phonenumber.js/PhoneNumberMetadata.js
    external/phonenumber.js/PhoneNumberNormalizer.js)

set(TELEPHONY_FILES
    qml/phonenumbers.js
    qml/qmldir)

install(FILES ${TELEPHONY_EXTERNAL_FILES}
        DESTINATION ${TELEPHONY_QML_DIR}/external)

install(FILES ${TELEPHONY_FILES}
        DESTINATION ${TELEPHONY_QML_DIR})
