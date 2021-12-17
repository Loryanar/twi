import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
  import DocumentPicker from 'react-native-document-picker';
  const UImage = () => {
    const [singleFile, setSingleFile] = useState(null);

    const uploadImage = async () => {
      
      if (singleFile != null) {
        const fileToUpload = singleFile;
        const data = new FormData();
        data.append('name', 'Image Upload');
        data.append('file_attachment', fileToUpload);
        // Please change file upload URL
        let res = await fetch(
          'http://localhost/upload.php',
          {
            method: 'post',
            body: data,
            headers: {
              'Content-Type': 'multipart/form-data; ',
            },
          }
        );
        let responseJson = await res.json();
        if (responseJson.status == 1) {
          alert('Upload Successful');
        }
      } else {
        // If no file selected the show alert
        alert('Please Select File first');
      }
    };

    const selectFile = async () => {
        // Opening Document Picker to select one file
        try {
          const res = await DocumentPicker.pick({
            // Provide which type of file you want user to pick
            type: [DocumentPicker.types.allFiles],
          
          });
          // Printing the log realted to the file
          console.log('res : ' + JSON.stringify(res));
          // Setting the state to show single file attributes
          setSingleFile(res);
        } catch (err) {
          setSingleFile(null);
          // Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            // If user canceled the document selection
            alert('Canceled');
          } else {
            // For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };
  }