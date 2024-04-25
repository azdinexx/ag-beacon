import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Home } from '../../assets/icones/home';
import { COLORS } from '../../constants/colors';

function Address() {
  const [expand, setExpand] = useState(false);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.primary,
            borderRadius: 100,
            aspectRatio: 1,
            padding: 5,
          }}
        >
          <Home
            style={{
              width: 25,
              height: 25,
              color: COLORS.primary,
            }}
          />
        </View>
        <Text
          style={{
            color: COLORS.primary,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Address
        </Text>
        <TouchableOpacity
          onPress={() => setExpand(!expand)}
          style={{
            marginLeft: 'auto',
            borderColor: COLORS.primary,
            borderWidth: 1,
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: 'bold',
              fontSize: 10,
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {expand && (
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.grey,
              fontSize: 12,
            }}
          >
            123, Lorem Ipsum, Dolor Sit Amet, Consectetur, Adipiscing Elit, Sed
            Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </Text>
        </View>
      )}
    </View>
  );
}

export default Address;
