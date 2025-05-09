import { ThemedText } from '@/components/ThemedText';
import { useAuth } from '@/context/AuthContext';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();

  if (!auth) {
    // TODO: Replace with a proper loading component or error message
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ThemedText>Loading authentication...</ThemedText>
      </View>
    );
  }
  const { signIn } = auth;

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Animated.View 
        style={styles.header}
        entering={FadeIn.duration(1000)}
      >
        <Image
          source={require('@/assets/images/react-logo.png')} // Replace with your image
          style={styles.logo}
          contentFit="contain"
        />
        <ThemedText type="title" style={styles.title}>Welcome Back</ThemedText>
        <ThemedText style={styles.subtitle}>Sign in to continue</ThemedText>
      </Animated.View>

      <Animated.View 
        style={styles.formContainer}
        entering={FadeInDown.duration(800).delay(200)}
      >
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#6b7280" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#6b7280" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons 
              name={showPassword ? "eye-off" : "eye"} 
              size={20} 
              color="#6b7280" 
              style={styles.inputIcon} 
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPassword}>
          <ThemedText style={styles.forgotPasswordText}>Forgot password?</ThemedText>
        </TouchableOpacity>

        {/* Sign In Button */}
        <Animated.View entering={FadeInDown.duration(800).delay(400)}>
          <TouchableOpacity style={styles.signInButton} onPress={signIn}>
            <ThemedText style={styles.signInButtonText}>Sign In</ThemedText>
          </TouchableOpacity>
        </Animated.View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <ThemedText style={styles.dividerText}>OR</ThemedText>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login */}
        <Animated.View 
          style={styles.socialContainer}
          entering={FadeInDown.duration(800).delay(600)}
        >
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={20} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={20} color="#4267B2" />
          </TouchableOpacity>
        </Animated.View>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <ThemedText style={styles.signUpText}>Don't have an account? </ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.signUpLink}>Sign Up</ThemedText>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  formContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 56,
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#111827',
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: '#3b82f6',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#3b82f6',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#6b7280',
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#6b7280',
  },
  signUpLink: {
    color: '#3b82f6',
    fontWeight: '600',
  },
});