import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ScoreboardScreen () {
  // Personal Details
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [semester, setSemester] = useState('');
  const [email, setEmail] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [address, setAddress] = useState('');
  const [parentsContact, setParentsContact] = useState('');

  // Academic Details
  const [sslc, setSslc] = useState('');
  const [puc, setPuc] = useState('');

  // UG Progress (Example for 8 semesters)
  const [sem1, setSem1] = useState('');
  const [sem2, setSem2] = useState('');
  const [sem3, setSem3] = useState('');
  const [sem4, setSem4] = useState('');
  const [sem5, setSem5] = useState('');
  const [sem6, setSem6] = useState('');
  const [sem7, setSem7] = useState('');
  const [sem8, setSem8] = useState('');

  // Co-curricular activities - For simplicity, we'll use text inputs to represent file names or links
  const [hackathonDoc, setHackathonDoc] = useState('');
  const [programmingContestDoc, setProgrammingContestDoc] = useState('');
  const [technicalPapersDoc, setTechnicalPapersDoc] = useState('');
  const [leetcodeDoc, setLeetcodeDoc] = useState('');
  const [onlineCoursesDoc, setOnlineCoursesDoc] = useState('');

  // Club Activities
  const [clubName, setClubName] = useState('');
  const [clubContribution, setClubContribution] = useState('');

  // Projects
  const [projectAbstract, setProjectAbstract] = useState('');

  const handleFileUploadPlaceholder = (field: string) => {
    Alert.alert('File Upload', `Simulating file upload for ${field}. In a real app, you'd integrate a file picker here.`);
    // In a real app, you would use a library like react-native-document-picker
    // For now, we can set a placeholder string
    switch (field) {
      case 'Hackathon':
        setHackathonDoc('hackathon_document.pdf');
        break;
      case 'Programming Contest':
        setProgrammingContestDoc('contest_proof.pdf');
        break;
      case 'Technical Papers':
        setTechnicalPapersDoc('paper_submission.pdf');
        break;
      case 'Leetcode Challenges':
        setLeetcodeDoc('leetcode_profile.pdf');
        break;
      case 'Online Courses':
        setOnlineCoursesDoc('course_certificate.pdf');
        break;
    }
  };

  const handleSubmit = () => {
    // Basic validation example
    if (!name.trim()) {
      Alert.alert('Validation Error', 'Name is required.');
      return;
    }
    if (!usn.trim()) {
      Alert.alert('Validation Error', 'USN is required.');
      return;
    }
    const semNum = parseInt(semester, 10);
    if (isNaN(semNum) || semNum < 1 || semNum > 8) {
        Alert.alert('Validation Error', 'Semester must be a number between 1 and 8.');
        return;
    }
    // Add more validation as needed

    const formData = {
      personalDetails: {
        name,
        usn,
        semester,
        email,
        fatherName,
        motherName,
        address,
        parentsContact,
      },
      academicDetails: {
        sslc,
        puc,
      },
      ugProgress: {
        sem1,
        sem2,
        sem3,
        sem4,
        sem5,
        sem6,
        sem7,
        sem8,
      },
      coCurricularActivities: {
        hackathonDoc,
        programmingContestDoc,
        technicalPapersDoc,
        leetcodeDoc,
        onlineCoursesDoc,
      },
      clubActivities: {
        clubName,
        clubContribution,
      },
      projects: {
        projectAbstract,
      },
    };
    console.log('Form Data:', formData);
    Alert.alert('Form Submitted', 'Check the console for form data.');
    // Here you would typically send the data to a server
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headerTitle}>Student Details Form</Text>

        {/* Personal Details Section */}
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your name" />
        <Text style={styles.label}>USN:</Text>
        <TextInput style={styles.input} value={usn} onChangeText={setUsn} placeholder="Enter your USN" />
        <Text style={styles.label}>Semester (1-8):</Text>
        <TextInput style={styles.input} value={semester} onChangeText={setSemester} placeholder="Enter semester" keyboardType="numeric" maxLength={1} />
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter your email" keyboardType="email-address" />
        <Text style={styles.label}>Father's Name:</Text>
        <TextInput style={styles.input} value={fatherName} onChangeText={setFatherName} placeholder="Enter father's name" />
        <Text style={styles.label}>Mother's Name:</Text>
        <TextInput style={styles.input} value={motherName} onChangeText={setMotherName} placeholder="Enter mother's name" />
        <Text style={styles.label}>Address:</Text>
        <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="Enter your address" multiline />
        <Text style={styles.label}>Parent's Contact Email:</Text>
        <TextInput style={styles.input} value={parentsContact} onChangeText={setParentsContact} placeholder="Enter parent's email" keyboardType="email-address" />

        {/* Academic Details Section */}
        <Text style={styles.sectionTitle}>Academic Details</Text>
        <Text style={styles.label}>SSLC Percentage/CGPA:</Text>
        <TextInput style={styles.input} value={sslc} onChangeText={setSslc} placeholder="Enter SSLC score" keyboardType="numeric" />
        <Text style={styles.label}>PUC/12th Percentage/CGPA:</Text>
        <TextInput style={styles.input} value={puc} onChangeText={setPuc} placeholder="Enter PUC/12th score" keyboardType="numeric" />

        {/* UG Progress Section */}
        <Text style={styles.sectionTitle}>UG Progress (SGPA/CGPA)</Text>
        <Text style={styles.label}>Semester 1:</Text>
        <TextInput style={styles.input} value={sem1} onChangeText={setSem1} placeholder="Semester 1 score" keyboardType="numeric" />
        <Text style={styles.label}>Semester 2:</Text>
        <TextInput style={styles.input} value={sem2} onChangeText={setSem2} placeholder="Semester 2 score" keyboardType="numeric" />
        <Text style={styles.label}>Semester 3:</Text>
        <TextInput style={styles.input} value={sem3} onChangeText={setSem3} placeholder="Semester 3 score" keyboardType="numeric" />
        <Text style={styles.label}>Semester 4:</Text>
        <TextInput style={styles.input} value={sem4} onChangeText={setSem4} placeholder="Semester 4 score" keyboardType="numeric" />
        <Text style={styles.label}>Semester 5:</Text>
        <TextInput style={styles.input} value={sem5} onChangeText={setSem5} placeholder="Semester 5 score" keyboardType="numeric" />
        <Text style={styles.label}>Semester 6:</Text>
        <TextInput style={styles.input} value={sem6} onChangeText={setSem6} placeholder="Semester 6 score" keyboardType="numeric" />
        <Text style={styles.label}>Semester 7:</Text>
        <TextInput style={styles.input} value={sem7} onChangeText={setSem7} placeholder="Semester 7 score" keyboardType="numeric" />
        <Text style={styles.label}>Semester 8:</Text>
        <TextInput style={styles.input} value={sem8} onChangeText={setSem8} placeholder="Semester 8 score" keyboardType="numeric" />


        {/* Co-curricular Activities Section */}
        <Text style={styles.sectionTitle}>Co-curricular Activities</Text>
        <Text style={styles.label}>Hackathon Participation/Achievements:</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileUploadPlaceholder('Hackathon')}>
          <Text style={styles.uploadButtonText}>Upload Document</Text>
        </TouchableOpacity>
        {hackathonDoc ? <Text style={styles.fileName}>{hackathonDoc}</Text> : null}

        <Text style={styles.label}>Programming Contest Participation/Achievements:</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileUploadPlaceholder('Programming Contest')}>
          <Text style={styles.uploadButtonText}>Upload Document</Text>
        </TouchableOpacity>
        {programmingContestDoc ? <Text style={styles.fileName}>{programmingContestDoc}</Text> : null}

        <Text style={styles.label}>Technical Papers Published/Presented:</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileUploadPlaceholder('Technical Papers')}>
          <Text style={styles.uploadButtonText}>Upload Document</Text>
        </TouchableOpacity>
        {technicalPapersDoc ? <Text style={styles.fileName}>{technicalPapersDoc}</Text> : null}

        <Text style={styles.label}>Challenges Solved on LeetCode/Other Platforms (Profile Link/Screenshot):</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileUploadPlaceholder('Leetcode Challenges')}>
          <Text style={styles.uploadButtonText}>Upload Document/Link</Text>
        </TouchableOpacity>
        {leetcodeDoc ? <Text style={styles.fileName}>{leetcodeDoc}</Text> : null}

        <Text style={styles.label}>Online Courses Completed (Certificates):</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileUploadPlaceholder('Online Courses')}>
          <Text style={styles.uploadButtonText}>Upload Document</Text>
        </TouchableOpacity>
        {onlineCoursesDoc ? <Text style={styles.fileName}>{onlineCoursesDoc}</Text> : null}


        {/* Club Activities Section */}
        <Text style={styles.sectionTitle}>Club Activities</Text>
        <Text style={styles.label}>Club Name:</Text>
        <TextInput style={styles.input} value={clubName} onChangeText={setClubName} placeholder="Enter club name" />
        <Text style={styles.label}>Contribution/Role:</Text>
        <TextInput style={styles.input} value={clubContribution} onChangeText={setClubContribution} placeholder="Describe your contribution" multiline />

        {/* Projects Section */}
        <Text style={styles.sectionTitle}>Projects</Text>
        <Text style={styles.label}>Project Abstract:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={projectAbstract}
          onChangeText={setProjectAbstract}
          placeholder="Enter project abstract"
          multiline
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  formContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    color: '#444',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 5,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fileName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50, // Extra space at the bottom
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
